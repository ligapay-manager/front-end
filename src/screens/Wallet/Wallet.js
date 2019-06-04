/* eslint-disable max-len */
import React from 'react';
import { Text, Clipboard, ToastAndroid } from 'react-native';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, IconStyle, QRCodeContainer, WalletView, AmountText, CardsContainer, Card } from './components';

import { WALLET } from '../../graphql/query/user';


class Wallet extends React.Component {
  state = {
    amount: null
  };

  onQrCodeClick = () => {
    const { walletId } = this.props;

    Clipboard.setString(walletId);
    ToastAndroid.show('Copied to the clipboard!', ToastAndroid.SHORT);
  };

  onQueryCompleted = ({ me: { wallet } }) => {
    const { amount } = wallet;

    this.setState({ amount });
  };

  render() {
    const { amount } = this.state;
    const { walletId, navigation } = this.props;

    return (
      <WalletView>
        <Container colors={['#14995D', '#14997e']}>
          <QRCodeContainer onPress={this.onQrCodeClick}>
            <QRCode value={walletId} size={130} bgColor="#14995D" fgColor="#fff" />
          </QRCodeContainer>

          <AmountText>
            <Query query={WALLET} fetchPolicy="no-cache" onCompleted={this.onQueryCompleted} pollInterval={30e3}>
              {({ loading }) => (loading ? '...' : `R$ ${(amount / 100).toFixed(2)}`)}
            </Query>
          </AmountText>
        </Container>

        <CardsContainer>
          <Card>
            <Icon name="credit-card" size={20} />
            <Text style={{ color: 'grey' }}>DATA</Text>
          </Card>

          <Card>
            <Icon name="credit-card" size={20} />
            <Text style={{ color: 'grey' }}>DATA</Text>
          </Card>

          <Card>
            <Icon name="credit-card" size={20} />
            <Text style={{ color: 'grey' }}>DATA</Text>
          </Card>
        </CardsContainer>

        <ActionButton buttonColor="#168C57" hideShadow size={40} fixNativeFeedbackRadius zIndex={1}>
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Transferir"
            onPress={() => navigation.navigate('CreateTransaction')}
            fixNativeFeedbackRadius
          >
            <IconStyle name="money-bill-wave" />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Adicionar fundos"
            onPress={() => navigation.navigate('AddFunds')}
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
