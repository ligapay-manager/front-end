import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import View from '../components/View';
import Button from '../components/Button';


export default class Example extends React.Component {
  handleLogout = async () => {
    const { navigation } = this.props;

    await AsyncStorage.multiRemove(['token', 'refreshToken']);

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
