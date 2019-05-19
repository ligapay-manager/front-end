/* eslint-disable react/no-unused-state */
import React from 'react';
import { Text, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import styled from 'styled-components/native';
import * as actions from '../../redux/reducers/user/actions';

import Queries from '../../graphql/query';

import Container from './Container';
import Avatar from './Avatar';
import View from '../../components/View';


const Centered = styled(View)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

class Profile extends React.Component {
  state = {
    data: {}
  };

  handleLogout = async () => {
    const { navigation, clearCredentials } = this.props;

    clearCredentials();
    navigation.navigate('Login');
  };

  render() {
    const { me } = this.state;

    return (
      <>
        <StatusBar animated backgroundColor="#fff" />
        <Centered>
          <Query query={Queries.ME} onCompleted={res => this.setState(res)}>
            {({ loading }) => {
              if (loading || !me) {
                return <ActivityIndicator animating color="#168C57" />;
              }

              return (
                <>
                  <Container>
                    <Avatar source={{ uri: me.team.avatar }} />
                  </Container>

                  <Container style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 20 }}>{me.team.name}</Text>
                    <Text style={{ fontSize: 10 }}>{me.team.cartolaName}</Text>
                  </Container>
                </>
              );
            }}
          </Query>
        </Centered>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  token: user.token
});

const mapDispatchToProps = {
  clearCredentials: actions.clearCredentials
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
