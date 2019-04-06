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


export default createAppContainer(
  createSwitchNavigator(routes, { initialRouteName: 'Login' })
);
