import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class ConfigScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Configurações',
    headerStyle: {
      backgroundColor: '#14995D'
    },
    headerTitleStyle: {
      color: '#ffffff'
    },
    headerTintColor: '#fff'
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ConfigScreen </Text>
      </View>
    );
  }
}
