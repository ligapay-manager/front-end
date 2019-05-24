import { createStackNavigator } from 'react-navigation';

import Wallet from './Wallet';
import CreateTransaction from './CreateTransaction';


export default createStackNavigator({
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      header: null
    }
  },
  CreateTransaction: {
    screen: CreateTransaction,
    navigationOptions: {
      title: 'Transferir',
      headerStyle: {
        backgroundColor: '#168C57'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
});
