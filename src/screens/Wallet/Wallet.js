/* eslint-disable max-len */
import React from 'react';
import {
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Clipboard,
  ToastAndroid,
  TouchableNativeFeedback
} from 'react-native';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import QRCode from 'react-native-qrcode';
import moment from 'moment';
import 'moment/locale/pt-br';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { AmountContainer, Container, IconStyle, QRCodeContainer, WalletView, TransactionContainer } from './components';

import { WALLET } from '../../graphql/query/user';


class Wallet extends React.Component {
  state = {
    amount: null,
    transactions: []
  };

  onQrCodeClick = () => {
    const { walletId } = this.props;

    Clipboard.setString(walletId);
    ToastAndroid.show('Copied to the clipboard!', ToastAndroid.SHORT);
  };

  onQueryCompleted = ({ me: { wallet } }) => {
    const { amount, transactions } = wallet;

    this.setState({ amount, transactions });
  };

  render() {
    const { amount, transactions } = this.state;
    const { walletId, navigation } = this.props;

    return (
      <WalletView>
        <StatusBar animated backgroundColor="#043927" />

        <Query query={WALLET} onCompleted={this.onQueryCompleted} fetchPolicy="no-cache">
          {({ loading }) => {
            if (loading) {
              return <ActivityIndicator animating color="#c6c013" />;
            }

            return (
              <>
                <Container>
                  <QRCodeContainer onPress={this.onQrCodeClick}>
                    <QRCode value={walletId} size={130} bgColor="#14995D" fgColor="#fff" />
                  </QRCodeContainer>

                  <AmountContainer>
                    <Icon name="money-bill" size={20} color="#4F7942" />
                    <Text>{(amount / 100).toFixed(2)}</Text>
                  </AmountContainer>
                </Container>

                {transactions && (
                  <FlatList
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      marginBottom: 10
                    }}
                    contentContainerStyle={{
                      alignItems: 'center',
                      marginBottom: 20
                    }}
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <TouchableNativeFeedback>
                        <TransactionContainer>
                          <Text style={{ color: 'grey' }}>{moment(item.createdAt).fromNow()}</Text>
                          <Text
                            style={{
                              color: item.amount >= 0 ? 'black' : 'red'
                            }}
                          >
                            R$
                            {' '}
                            {(item.amount / 100).toFixed(2)}
                          </Text>
                        </TransactionContainer>
                      </TouchableNativeFeedback>
                    )}
                  />
                )}
              </>
            );
          }}
        </Query>

        <ActionButton buttonColor="#ffd300" hideShadow size={40} fixNativeFeedbackRadius zIndex={1}>
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Transferir"
            onPress={() => navigation.navigate('CreateTransaction')}
            fixNativeFeedbackRadius
          >
            <IconStyle name="money-bill-wave" />
          </ActionButton.Item>
        </ActionButton>
      </WalletView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id
});

export default connect(mapStateToProps)(Wallet);
