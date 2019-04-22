import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

import * as actions from '../redux/reducers/user/actions';
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
    const { navigation, setCredentials } = this.props;
    const [token, refreshToken] = await AsyncStorage.multiGet(['token', 'refreshToken']);

    if (token[1] && refreshToken[1]) {
      setCredentials(token[1], refreshToken[1]);
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

const mapDispatchToProps = dispatch => ({
  setCredentials: (token, refreshToken) => dispatch(actions.setCredentials(token, refreshToken))
});

export default connect(
  null,
  mapDispatchToProps
)(AuthLoading);
