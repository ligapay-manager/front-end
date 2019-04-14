import { createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import AuthLoading from '../screens/AuthLoading';


const routes = {
  AuthLoading,
  Login
};

export default createSwitchNavigator(routes, { initialRouteName: 'AuthLoading' });
