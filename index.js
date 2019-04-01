import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';

import store from './src/redux/store';
import Routes from './src/routes';


const AppStart = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppStart);
