import React from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import View from '../../components/View';


const Ranking = (props) => {
  const { token } = props;

  return (
    <View>
      <Text>Ranking</Text>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(Ranking);
