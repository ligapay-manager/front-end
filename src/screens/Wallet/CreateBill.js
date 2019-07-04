import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// import {
//   PaymentMehodView
// } from './styled';


class CreateBill extends React.Component {
  render() {
    const { walletId, navigation, cards } = this.props;

    return (
      <View>
        <Text>Boleto bancário</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id,
  cards: user.cards
});

export default connect(mapStateToProps)(CreateBill);
