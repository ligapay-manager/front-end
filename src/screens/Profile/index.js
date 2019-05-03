import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import View from '../../components/View';
import Button from '../../components/Button';

import * as actions from '../../redux/reducers/user/actions';


class Profile extends React.Component {
  handleLogout = async () => {
    const { navigation, clearCredentials } = this.props;

    clearCredentials();
    navigation.navigate('Login');
  };

  render() {
    const { token } = this.props;

    return (
      <View>
        <Text>Profile</Text>
        <Text>{token}</Text>
        <Button title="Sair" onPress={this.handleLogout}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </Button>
      </View>
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
