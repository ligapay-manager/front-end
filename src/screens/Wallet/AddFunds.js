import React from 'react';
import { Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {
  AddFundsView
} from './styled';


class AddFunds extends React.Component {
  state = {
    amount: null
  };

  render() {
    const { amount } = this.state;
    const { walletId, navigation, cards } = this.props;

    return (
      <AddFundsView>
        <Text>AddFunds</Text>
        <TextInput
          style={{height: 100, width: 100, borderColor: "green", borderWidth: 1, textAlign: "center", fontSize: 50}}
          onChangeText={(text) => this.setState({amount})}
          value={this.state.amount}
          placeholder="0" 
          keyboardType={'numeric'}
        />
        <Button title="Continue" onPress={() => { navigation.navigate('PaymentMethod'); }} />
      </AddFundsView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id,
  cards: user.cards
});

export default connect(mapStateToProps)(AddFunds);
