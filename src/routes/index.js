import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';

import RootRouter from './root';


const NavigationContainer = createAppContainer(RootRouter);

const router = props => (
  <NavigationContainer {...props}>
    <StatusBar animated backgroundColor="#14995D" />
  </NavigationContainer>
);

export default router;
