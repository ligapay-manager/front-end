import { createStackNavigator } from 'react-navigation';

import Wallet from './Wallet';
import AddFunds from './AddFunds';
import CreateTransaction from './CreateTransaction';
import PaymentMethod from './PaymentMethod';
import AddCreditCard from './AddCreditCard';
import CreateBill from './CreateBill';


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
  },
  AddFunds: {
    screen: AddFunds,
    navigationOptions: {
      header: null
    }
  },
  PaymentMethod: {
    screen: PaymentMethod,
    navigationOptions: {
      header: null
    }
  },
  AddCreditCard: {
    screen: AddCreditCard,
    navigationOptions: {
      header: null
    }
  },
  CreateBill: {
    screen: CreateBill,
    navigationOptions: {
      header: null
    }
  }
});
