/* eslint-disable max-len */
import React from 'react';
import { Text, StatusBar, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import moment from 'moment';

import View from '../../components/View';
import query from '../../graphql/query';


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
  border-radius: 10px;
  height: 50px;
  width: 250px;
  elevation: 4px;
  background-color: #fff;
`;

const TransactionContainer = styled(AmountContainer)`
  elevation: 0px;
  margin-top: 10px;
`;

class Wallet extends React.Component {
  state = {
    amount: null,
    transactions: []
  };

  render() {
    const { amount, transactions } = this.state;

    return (
      <View style={{ backgroundColor: '#14995D' }}>
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
                  <AmountContainer>
                    <Icon name="money-bill" size={20} />
                    <Text style={{ color: 'black' }}>{(amount / 100).toFixed(2)}</Text>
                  </AmountContainer>
                </Container>

                <Container>
                  {transactions.map(t => (
                    <TransactionContainer key={t.id}>
                      <Text style={{ color: 'grey' }}>{moment(t.createdAt).fromNow()}</Text>
                      <Text style={{ color: t.amount >= 0 ? 'black' : 'red' }}>
                        {(t.amount / 100).toFixed(2)}
                      </Text>
                    </TransactionContainer>
                  ))}
                </Container>
              </>
            );
          }}
        </Query>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(Wallet);
