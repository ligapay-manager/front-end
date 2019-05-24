/* eslint-disable max-len */
import React from 'react';
import { Text, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import QRCode from 'react-native-qrcode';
import moment from 'moment';

import View from '../../components/View';
import query from '../../graphql/query';


const QRCodeContainer = styled(View)`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 200px;
  width: 250px;
  background-color: transparent;
`;

const WalletView = styled(View)`
  background-color: #14995d;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 50%;
`;

const AmountContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 250px;
  margin-top: 20px;
  border-radius: 10px;
  elevation: 4px;
  background-color: #fff;
`;

const TransactionContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 250px;
  elevation: 4px;
  background-color: #fff;
  margin-top: 10px;
`;

class Wallet extends React.Component {
  state = {
    amount: null,
    transactions: []
  };

  render() {
    const { amount, transactions } = this.state;
    const { walletId } = this.props;

    return (
      <WalletView>
        <StatusBar animated backgroundColor="#043927" />

        <Query
          query={query.GET_WALLET}
          onCompleted={({ me: { wallet } }) => this.setState({ amount: wallet.amount, transactions: wallet.transactions })
          }
          fetchPolicy="no-cache"
        >
          {({ loading }) => {
            if (loading) {
              return <ActivityIndicator animating color="#c6c013" />;
            }

            return (
              <>
                <Container>
                  <QRCodeContainer>
                    <QRCode value={walletId} size={130} bgColor="#14995D" fgColor="#fff" />
                  </QRCodeContainer>

                  <AmountContainer>
                    <Icon name="money-bill" size={20} color="#4F7942" />
                    <Text>{(amount / 100).toFixed(2)}</Text>
                  </AmountContainer>
                </Container>

                <FlatList
                  style={{ width: '100%' }}
                  contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 }}
                  data={transactions}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <TransactionContainer>
                      <Text style={{ color: 'grey' }}>{moment(item.createdAt).fromNow()}</Text>
                      <Text style={{ color: item.amount >= 0 ? 'black' : 'red' }}>
                        {(item.amount / 100).toFixed(2)}
                      </Text>
                    </TransactionContainer>
                  )}
                />
              </>
            );
          }}
        </Query>
      </WalletView>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  walletId: user.walletId
});

export default connect(mapStateToProps)(Wallet);
