import React from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import View from '../../components/View';


const Notifications = (props) => {
  //const { token } = props;

  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(Notifications);
