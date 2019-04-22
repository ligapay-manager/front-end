import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { name as appName } from './app.json';

import { store, persistor } from './src/redux/store';
import theme from './src/theme';
import Routes from './src/routes';


const apollo = new ApolloClient({
  uri: 'https://ligapay.herokuapp.com'
});

const AppStart = () => (
  <ApolloProvider client={apollo}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppStart);
