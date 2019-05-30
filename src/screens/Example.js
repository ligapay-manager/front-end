import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import View from '../components/View';
import Button from '../components/Button';
import { Creators as actions } from '../store/ducks/user';


class Example extends React.Component {
  handleLogout = async () => {
    const { navigation, clearCredentials } = this.props;

    clearCredentials();
    navigation.navigate('Login');
  };

  render() {
    return (
      <View>
        <Button title="Sair" onPress={this.handleLogout}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = {
  clearCredentials: actions.clearCredentials
};

export default connect(
  null,
  mapDispatchToProps
)(Example);
