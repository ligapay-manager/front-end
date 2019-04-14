import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Example from '../screens/Example';
import colors from '../theme/colors';


const appRoutes = {
  Wallet: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`wallet${!focused ? '-outline' : ''}`} size={20} color={tintColor} />
      )
    }
  },
  Ranking: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`trophy${!focused ? '-outline' : ''}`} size={20} color={tintColor} />
      )
    }
  },
  Leagues: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`shield-account${!focused ? '-outline' : ''}`} size={20} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`account-circle${!focused ? '-outline' : ''}`} size={20} color={tintColor} />
      )
    }
  }
};

export default createMaterialTopTabNavigator(appRoutes, {
  swipeEnabled: true,
  initialRouteName: 'Profile',
  tabBarPosition: 'bottom',
  optimizationsEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: colors.lightYellow,
    inactiveTintColor: '#909090',
    style: {
      backgroundColor: '#fff'
    }
  }
});
