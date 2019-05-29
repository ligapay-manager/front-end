import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import { name as appName } from './app.json';

import { store, persistor } from './src/redux/store';
// import { store, persistor } from './src/store';
import theme from './src/theme';
import Routes from './src/routes';
import apolloClient from './src/graphql/client';


const AppStart = () => (
  <ApolloProvider client={apolloClient}>
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
