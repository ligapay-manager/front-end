import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';

import styled from 'styled-components/native';
import Button from './components/Button';


const Container = styled.View`
  background-color: #178c58;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Title = Animated.createAnimatedComponent(styled.Text`
  color: #c6c013;
  font-size: 60px;
  font-family: 'Pacifico-Regular';
  margin-bottom: 40px;
  padding: 0px 10px;
`);

const Input = Animated.createAnimatedComponent(styled.TextInput`
  background-color: #fff;
  height: 38px;
  border-radius: 2px;
  elevation: 2px;
  padding: 0px 10px;
  width: 210px;
  margin-bottom: 10px;
  text-align: center;
`);

const AnimatedButton = Animated.createAnimatedComponent(Button);

export default class App extends Component {
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
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.fade, {
        toValue: 1,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.usernamePosition, {
        toValue: 0,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.passwordPosition, {
        toValue: 0,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.animations.buttonPosition, {
        toValue: 0,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      })

    ]).start();
  }

  render() {
    const {
      fade,
      titlePosition,
      buttonPosition,
      passwordPosition,
      usernamePosition
    } = this.animations;

    return (
      <Container>

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
          title="Login"
        />
      </Container>
    );
  }
}
