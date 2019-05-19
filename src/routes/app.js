import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';

import colors from '../theme/colors';

import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import Ranking from '../screens/Ranking';
import Notifications from '../screens/Notifications';


const appRoutes = {
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`wallet${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  },
  Ranking: {
    screen: Ranking,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`trophy${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  },
  Leagues: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`shield-account${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`${!focused ? 'bell-outline' : 'bell-ring'}`} size={25} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`account-circle${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  }
};

export default createMaterialTopTabNavigator(appRoutes, {
  swipeEnabled: false,
  initialRouteName: 'Profile',
  tabBarPosition: 'bottom',
  optimizationsEnabled: true,
  animationEnabled: false,
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
