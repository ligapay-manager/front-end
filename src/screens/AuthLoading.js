import React from 'react';
import { ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../theme/colors';


const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.colors.lightGreen};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

class AuthLoading extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const [token, refreshToken] = await AsyncStorage.multiGet(['token', 'refreshToken']);

    if (token[1] && refreshToken[1]) {
      navigation.navigate('App');
    } else {
      navigation.navigate('Login');
    }
  }

  render() {
    return (
      <Container>
        <ActivityIndicator size={35} color={colors.lightYellow} />
      </Container>
    );
  }
}

export default AuthLoading;
