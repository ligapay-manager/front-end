import React from 'react';
import { Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {
  PaymentMehodView
} from './styled';


class PaymentMethod extends React.Component {
  render() {
    const { walletId, navigation, cards } = this.props;

    return (
      <PaymentMehodView>
        <Text>Método de pagamento</Text>

        <Button title="Cartão de crédito" onPress={() => { navigation.navigate('AddCreditCard'); }} />
        <Button title="Boleto Bancário" onPress={() => { navigation.navigate('CreateBill'); }} />

        {/* <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('AddCreditCard')}}>
          <Text>Cartão de crédito</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('PaymentMethod')}}>
          <Text>Boleto</Text>
        </TouchableOpacity> */}
      </PaymentMehodView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id,
  cards: user.cards
});

export default connect(mapStateToProps)(PaymentMethod);
