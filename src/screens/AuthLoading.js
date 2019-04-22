import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';

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
    const { token, refreshToken, navigation } = this.props;

    if (token && refreshToken) {
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

const mapDispatchToProps = {
  setCredentials: actions.setCredentials
};

const mapStateToProps = ({ user }) => ({
  token: user.token,
  refreshToken: user.refreshToken
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading);
