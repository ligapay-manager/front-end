/* eslint-disable no-restricted-globals */
import React from 'react';
import { Text, ActivityIndicator, ToastAndroid } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';

import View from '../../components/View';
import Button from '../../components/Button';

import mutations from '../../graphql/mutation';

import { WALLET } from '../../graphql/query/user';


const Screen = styled(View)`
  background-color: #14995d;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  background-color: #fff;
  height: 50px;
  border-radius: ${props => props.theme.constants.borderRadius};
  elevation: ${props => props.theme.constants.elevation};
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 10px;
`;

class CreateTransaction extends React.Component {
  state = {
    destination: '',
    amount: '0'
  };

  handleSuccess = async ({ createTransaction: { success, info } }) => {
    if (success) {
      const { navigation } = this.props;

      navigation.goBack();
    } else {
      ToastAndroid.show(info, ToastAndroid.SHORT);
    }
  };

  render() {
    const { destination, amount } = this.state;
    const { origin } = this.props;

    return (
      <Screen>
        <Input
          onChangeText={e => this.setState(prev => ({ ...prev, destination: e }))}
          value={destination}
          placeholder="Destino"
        />

        <Input
          onChangeText={e => this.setState(prev => (isNaN(e) ? prev : { ...prev, amount: e }))}
          value={amount}
          placeholder="Quantidade"
          keyboardType="numeric"
        />

        <Mutation
          mutation={mutations.CREATE_TRANSCTION}
          variables={{ origin, destination, amount: Number(amount) }}
          onCompleted={this.handleSuccess}
          onError={this.handleError}
          refetchQueries={[{ query: WALLET }]}
        >
          {(transferir, { loading }) => (
            <Button onPress={!loading ? transferir : () => {}} color="#14996F">
              {loading ? (
                <ActivityIndicator animating color="#c6c013" />
              ) : (
                <Text style={{ color: '#fff' }}>Transferir</Text>
              )}
            </Button>
          )}
        </Mutation>
      </Screen>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  origin: user.wallet.id
});

export default connect(mapStateToProps)(CreateTransaction);
