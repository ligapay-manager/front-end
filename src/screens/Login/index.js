import React, { Component, Fragment } from 'react';
import { Animated, Easing, StatusBar, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../../components/Button';
import Container from './Container';
import Title from './Title';
import Input from './Input';

import loginGql from '../../graphql/mutation/login';


const AnimatedButton = Animated.createAnimatedComponent(Button);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: true
    };

    this.animationValues = {
      titlePosition: new Animated.Value(-40),
      usernamePosition: new Animated.Value(-40),
      passwordPosition: new Animated.Value(40),
      buttonPosition: new Animated.Value(40),
      fade: new Animated.Value(0)
    };

    this.animate = Animated.parallel([
      Animated.timing(this.animationValues.titlePosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animationValues.fade, {
        toValue: 1,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animationValues.usernamePosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animationValues.passwordPosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animationValues.buttonPosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      })
    ]);
  }

  async componentDidMount() {
    const [token, refreshToken] = await AsyncStorage.multiGet(['token', 'refreshToken']);

    if (token[1] && refreshToken[1]) {
      const { navigation } = this.props;

      navigation.navigate('App');
    } else {
      this.setState(prev => ({ ...prev, loading: false }));
      this.animate.start();
    }
  }

  // eslint-disable-next-line no-unused-vars
  async handleLogin({ login: { token, refreshToken } }) {
    await AsyncStorage.multiSet([['token', token], ['refreshToken', refreshToken]]);

    const { navigation } = this.props;
    navigation.navigate('App');
  }

  render() {
    const { fade, titlePosition, buttonPosition, passwordPosition, usernamePosition } = this.animationValues;
    const { email, password, loading: loadingStorage } = this.state;

    return (
      <Container>
        <StatusBar animated backgroundColor="#14995D" />

        {loadingStorage ? (
          <ActivityIndicator animating size="large" color="#c6c013" />
        ) : (
          <Fragment>
            <Title style={{ opacity: fade, transform: [{ translateY: titlePosition }] }}>LigaPay</Title>

            <Input
              style={{ opacity: fade, transform: [{ translateX: usernamePosition }] }}
              onChangeText={e => this.setState(prev => ({ ...prev, email: e }))}
              value={email}
              placeholder="Email"
            />

            <Input
              style={{ opacity: fade, transform: [{ translateX: passwordPosition }] }}
              onChangeText={e => this.setState(prev => ({ ...prev, password: e }))}
              value={password}
              placeholder="Senha"
              secureTextEntry
            />

            <Mutation
              mutation={loginGql}
              variables={{ value: { email: email.trim().toLowerCase(), password } }}
              onCompleted={data => this.handleLogin(data)}
            >
              {(login, { loading }) => (
                <AnimatedButton
                  style={{ opacity: fade, transform: [{ translateY: buttonPosition }] }}
                  onPress={!loading ? login : () => {}}
                  color="#14996F"
                  title="Entrar"
                >
                  {loading ? (
                    <ActivityIndicator animating color="#c6c013" />
                  ) : (
                    <Text style={{ color: '#fff' }}>Entrar</Text>
                  )}
                </AnimatedButton>
              )}
            </Mutation>
          </Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({
  example: appReducer.example
});

export default connect(mapStateToProps)(Login);
