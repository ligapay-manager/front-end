import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import styled from "styled-components/native";
import Button from "./components/Button";

const Container = styled.View`
  background-color: #178c58;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Title = Animated.createAnimatedComponent(styled.Text`
  color: #c6c013;
  font-size: 60px;
  font-family: 'Pacifico-Regular';
  margin-bottom: 40px;
  padding: 0px 10px;
`)

const Input = styled.TextInput`
  background-color: #fff;
  height: 38px;
  border-radius: 2px;
  elevation: 2px;
  padding: 0px 10px;
  width: 210px;
  margin-bottom: 10px;
  text-align: center;
`

export default class App extends Component<Props> {
  titlePosition: Animated.Value;
  titleFade: Animated.Value;

  constructor(props: Props) {
    super(props)

    this.titlePosition = new Animated.Value(-40)
    this.titleFade = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.titlePosition, {
        toValue: 0,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(this.titleFade, {
        toValue: 1,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true
      })
    ]).start()
  }

  render() {
    const { titleFade, titlePosition } = this

    return (
      <Container>
        <Title style={{ opacity: titleFade, transform: [{ translateY: titlePosition }] }}>
          LigaPay
        </Title>

        <Input placeholder={'Usuário'} />
        <Input placeholder={'Senha'} secureTextEntry />
        <Button title={'Login'} />
      </Container >
    );
  }
}

interface Props { }
