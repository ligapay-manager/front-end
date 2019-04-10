import React, { Component } from 'react';
import { Animated, Easing, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Container from './Container';
import Title from './Title';
import Input from './Input';


const AnimatedButton = Animated.createAnimatedComponent(Button);

class Login extends Component {
  constructor(props) {
    super(props);

    this.animations = {
      titlePosition: new Animated.Value(-40),
      usernamePosition: new Animated.Value(-40),
      passwordPosition: new Animated.Value(40),
      buttonPosition: new Animated.Value(40),
      fade: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animations.titlePosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.fade, {
        toValue: 1,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.usernamePosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.passwordPosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.buttonPosition, {
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: true
      })

    ]).start();
  }

  render() {
    const { fade, titlePosition, buttonPosition, passwordPosition, usernamePosition } = this.animations;
    const { navigation: { navigate } } = this.props;

    return (
      <Container>
        <StatusBar animated backgroundColor="#14995D" />
        <Title style={{ opacity: fade, transform: [{ translateY: titlePosition }] }}>
          LigaPay
        </Title>

        <Input
          style={{ opacity: fade, transform: [{ translateX: usernamePosition }] }}
          placeholder="Usuário"
        />

        <Input
          style={{ opacity: fade, transform: [{ translateX: passwordPosition }] }}
          placeholder="Senha"
          secureTextEntry
        />

        <AnimatedButton
          style={{ opacity: fade, transform: [{ translateY: buttonPosition }] }}
          onPress={() => navigate('Example')}
          color="#14996F"
          title="Entrar"
        />
      </Container>
    );
  }
}
const mapStateToProps = ({ appReducer }) => ({
  example: appReducer.example
});

export default connect(mapStateToProps)(Login);
