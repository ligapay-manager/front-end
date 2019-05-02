import React from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import View from '../../components/View';


const Wallet = (props) => {
  const { token } = props;

  return (
    <View>
      <Text>Wallet</Text>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(Wallet);
