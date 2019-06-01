import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { reduce } from 'lodash';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import { Creators as actions } from '../../store/ducks/user';

import View from '../../components/View';

import { Avatar, Container } from './components';
import { TEAM_SCORES } from '../../graphql/query/user';


const Centered = styled(View)`
  width: 100%;
  justify-content: space-around;
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
      <Centered>
        <Container>
          <Avatar source={{ uri: avatar }} />
        </Container>

        <Container style={{ justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <Text style={{ fontSize: 10 }}>{cartolaName}</Text>
        </Container>

        <Container style={{ justifyContent: 'flex-start' }}>
          <Query query={TEAM_SCORES} onCompleted={this.onScoresObtained} fetchPolicy="no-cache">
            {({ loading, data }) => {
              if (loading || !data) {
                return <ActivityIndicator animating color="#ffd300" />;
              }

              const { scores } = data.me.team;
              const score = reduce(scores, (prev, curr) => prev + curr.score, 0).toFixed(2);

              return (
                <>
                  <Icon name="trophy" size={20} color="#ffd300" />
                  <Text style={{ fontSize: 20, marginTop: 10 }}>{score}</Text>
                </>
              );
            }}
          </Query>
        </Container>

        <ActionButton
          renderIcon={() => <Icon name="logout-variant" size={15} color="#fff" />}
          buttonColor="#B8B8B8"
          onPress={this.handleLogout}
          zIndex={1}
          size={30}
        />
      </Centered>
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
