import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Example from '../screens/Example';
import Profile from '../screens/Profile';
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
  Notifications: {
    screen: Example,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`${!focused ? 'bell-outline' : 'bell-ring'}`} size={20} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`account-circle${!focused ? '-outline' : ''}`} size={20} color={tintColor} />
      )
    }
  }
};

export default createMaterialTopTabNavigator(appRoutes, {
  swipeEnabled: false,
  initialRouteName: 'Profile',
  tabBarPosition: 'bottom',
  optimizationsEnabled: true,
  order: ['Leagues', 'Wallet', 'Ranking', 'Notifications', 'Profile'],
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
