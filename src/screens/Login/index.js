import React, { Component } from 'react';
import { Animated, Easing, StatusBar, ActivityIndicator, Text, ToastAndroid } from 'react-native';

import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';

import Button from '../../components/Button';
import Container from './Container';
import Title from './Title';
import Input from './Input';

import * as actions from '../../redux/reducers/user/actions';
import Mutations from '../../graphql/mutation';


const AnimatedButton = Animated.createAnimatedComponent(Button);

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  animationValues = {
    titlePosition: new Animated.Value(-40),
    usernamePosition: new Animated.Value(-40),
    passwordPosition: new Animated.Value(40),
    buttonPosition: new Animated.Value(40),
    fade: new Animated.Value(0)
  };

  animate = Animated.parallel([
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

  async componentDidMount() {
    this.animate.start();
  }

  handleLogin = async ({ login }) => {
    const { navigation, setCredentials } = this.props;
    const {
      token,
      info,
      user: {
        id: userId,
        team: { id: teamId },
        wallet: { id: walletId }
      }
    } = login;

    ToastAndroid.show(info, ToastAndroid.SHORT);
    setCredentials(token, userId, teamId, walletId);
    navigation.navigate('App');
  };

  handleError = async () => {
    ToastAndroid.show('Um erro ocorreu. Favor verificar suas credenciais ou conexão.', ToastAndroid.SHORT);
  };

  render() {
    const { fade, titlePosition, buttonPosition, passwordPosition, usernamePosition } = this.animationValues;
    const { email, password } = this.state;

    return (
      <Container>
        <StatusBar animated backgroundColor="#14995D" />
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
          mutation={Mutations.LOGIN}
          variables={{ email: email.trim().toLowerCase(), password }}
          onCompleted={this.handleLogin}
          onError={this.handleError}
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
      </Container>
    );
  }
}

const mapDispatchToProps = {
  setCredentials: actions.setCredentials
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
