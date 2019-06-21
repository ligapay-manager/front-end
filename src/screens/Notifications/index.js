import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationScreen from './MainScreen';
import ConfigScreen from './ConfigScreen';


const NotificationStack = createStackNavigator(
  {
    NotificationScreen: {
      screen: NotificationScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Configurações',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('ConfigScreen')}>
            <Icon style={{ marginRight: 15 }} name="settings" color="#fff" size={25} />
          </TouchableOpacity>
        )
      })
    },
    ConfigScreen: {
      screen: ConfigScreen,
      navigationOptions: {
        title: 'Configurações'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#14995D'
      },
      headerTintColor: '#ffffff'
    }
  }
);

export default NotificationStack;
