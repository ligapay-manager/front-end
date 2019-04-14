import { createSwitchNavigator } from 'react-navigation';

import App from './app';
import Login from '../screens/Login';


const rootRoutes = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  App
};

export default createSwitchNavigator(rootRoutes, { initialRouteName: 'Login' });
