import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { name as appName } from './app.json';

import store from './src/redux/store';
import theme from './src/theme';
import Routes from './src/routes';


const AppStart = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppStart);
