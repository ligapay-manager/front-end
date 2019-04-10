import React from 'react';
import { StatusBar } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Example from '../screens/Example';


const routes = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Example
};

const NavigationContainer = createAppContainer(
  createSwitchNavigator(routes, { initialRouteName: 'Login' })
);

const Root = props => (
  <NavigationContainer {...props}>
    <StatusBar animated backgroundColor="#14995D" />
  </NavigationContainer>
);
export default Root;
