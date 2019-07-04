/* eslint-disable max-len */
import React from 'react';
import { Text, Clipboard, ToastAndroid, TouchableOpacity } from 'react-native';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/Entypo';
import IconPig from 'react-native-vector-icons/FontAwesome5';
import IconBank from 'react-native-vector-icons/FontAwesome';

import EmptyState from './EmptyState';
import {
  Container,
  IconStyle,
  QRCodeContainer,
  WalletView,
  AmountText,
  CardsContainer,
  Menu,
  ButtonContainer,
  ButtonMessage,
  Card
} from './styled';

import { WALLET } from '../../graphql/query/user';


class Wallet extends React.Component {
  state = {
    amount: null
  };

  onQrCodeClick = () => {
    const { walletId } = this.props;

    Clipboard.setString(walletId);
    ToastAndroid.show('Copiado para a área de transferência!', ToastAndroid.SHORT);
  };

  onQueryCompleted = ({ me: { wallet } }) => {
    const { amount } = wallet;

    this.setState({ amount });
  };

  render() {
    const { amount } = this.state;
    const { walletId, navigation, cards } = this.props;

    return (
      <WalletView>
        <ActionButton
          renderIcon={() => <Icon name="dots-three-horizontal" color="#fff" size={12} />}
          buttonColor="#11824f"
          hideShadow
          size={40}
          fixNativeFeedbackRadius
          zIndex={1}
          elevation={4}
          verticalOrientation="down"
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Transferir"
            onPress={() => navigation.navigate('CreateTransaction')}
            fixNativeFeedbackRadius
          >
            <IconStyle name="money-bill-wave" />
          </ActionButton.Item>

          {/* <ActionButton.Item
            buttonColor="#9b59b6"
            title="Adicionar fundos"
            onPress={() => navigation.navigate('AddFunds')}
            fixNativeFeedbackRadius
          >
            <IconStyle name="money-bill-wave" />
          </ActionButton.Item> */}
        </ActionButton>

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

        <Menu>
          <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('AddFunds'); }}>
            <ButtonContainer>
              <IconPig name="piggy-bank" size={20} color="#fff" />
              <ButtonMessage>Adicionar</ButtonMessage>
            </ButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('AddFunds'); }}>
            <ButtonContainer>
              <IconBank name="bank" size={20} color="#fff" />
              <ButtonMessage>Retirar</ButtonMessage>
            </ButtonContainer>
          </TouchableOpacity>
        </Menu>

        <CardsContainer>
          {cards.length ? (
            cards.map((c, k) => (
              <Card key={k}>
                <Icon name="cc-mastercardc" size={20} />
                <Text style={{ color: 'grey' }}>{c.lastDigits}</Text>
              </Card>
            ))
          ) : (
            <EmptyState />
          )}
        </CardsContainer>
      </WalletView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.wallet.id,
  cards: user.cards
});

export default connect(mapStateToProps)(Wallet);
