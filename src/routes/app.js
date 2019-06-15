import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';

import colors from '../theme/colors';

import Profile from '../screens/Profile';
import Wallet from '../screens/Wallet';
import Notifications from '../screens/Notifications';
import League from '../screens/Leagues';
import MyTeam from '../screens/MyTeam';


const appRoutes = {
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`wallet${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  },
  MyTeam: {
    screen: MyTeam,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`shield-account${!focused ? '-outline' : ''}`} size={25} color={tintColor} />
      )
    }
  },
  Leagues: {
    screen: League,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="shield-half-full" size={25} color={tintColor} />
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
  // swipeEnabled: false,
  initialRouteName: 'Leagues',
  // lazy: true,
  tabBarPosition: 'bottom',
  optimizationsEnabled: true,
  animationEnabled: false,
  order: ['MyTeam', 'Wallet', 'Leagues', 'Notifications', 'Profile'],
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
