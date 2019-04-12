import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { name as appName } from './app.json';

import store from './src/redux/store';
import theme from './src/theme';
import Routes from './src/routes';


const apollo = new ApolloClient({
  uri: 'https://ligapay.herokuapp.com'
});

const AppStart = () => (
  <ApolloProvider client={apollo}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppStart);
