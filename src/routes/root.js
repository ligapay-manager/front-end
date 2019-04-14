import { createSwitchNavigator } from 'react-navigation';

import App from './app';
import Auth from './auth';


const rootRoutes = {
  Auth,
  App
};

export default createSwitchNavigator(rootRoutes, { initialRouteName: 'Auth' });
