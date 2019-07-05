import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

// import {
//   PaymentMehodView
// } from './styled';

class AddCreditCard extends React.Component {
  render() {
    const { walletId, navigation, cards } = this.props;

    return (
      <View>
        <Text>Cartão de crédito</Text>
        <CreditCardInput requiresName={true}/>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id,
  cards: user.cards
});

export default connect(mapStateToProps)(AddCreditCard);
