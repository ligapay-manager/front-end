import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styled, { css } from "styled-components/native";


const Container = styled.View`
  background-color: #178c58;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Title = styled.Text`
  color: #c6c013;
  margin: 0px 0px 10px 0px
  font-size: 50px;
  border-radius: 50;
  padding: 5px 20px;
  font-family: 'Pacifico-Regular';
`

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Title> Liga Pay </Title>
      </Container>
    );
  }
}

interface Props { }
