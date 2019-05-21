/* eslint-disable react/no-unused-state */
import React from 'react';
import { Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
// import { Query } from 'react-apollo';
import styled from 'styled-components/native';
import * as actions from '../../redux/reducers/user/actions';

// import Queries from '../../graphql/query';

import Container from './Container';
import Avatar from './Avatar';
import View from '../../components/View';


const Centered = styled(View)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

class Profile extends React.PureComponent {
  handleLogout = async () => {
    const { navigation, clearCredentials } = this.props;

    clearCredentials();
    navigation.navigate('Login');
  };

  render() {
    const { avatar, cartolaName, name } = this.props;

    return (
      <View>
        <StatusBar animated backgroundColor="#fff" />
        <Centered>
          <Container>
            <Avatar source={{ uri: avatar }} />
          </Container>

          <Container style={{ justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <Text style={{ fontSize: 10 }}>{cartolaName}</Text>
          </Container>
        </Centered>
      </View>
    );
  }
}

const mapStateToProps = ({ user: { team } }) => {
  const { cartolaName, avatar, name } = team;

  return { cartolaName, avatar, name };
};

const mapDispatchToProps = {
  clearCredentials: actions.clearCredentials
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
