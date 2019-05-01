import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import View from '../../components/View';
import Button from '../../components/Button';

import * as actions from '../../redux/reducers/user/actions';

// const Profile = (props) => {
//   const { token } = props;

//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// };

// const mapStateToProps = ({ user }) => ({
//   token: user.token
// });

// export default connect(mapStateToProps)(Profile);

export default connect(null, { clearCredentials: actions.clearCredentials })(
  (props) => {
    const { token } = props;

    // const mapStateToProps = ({ user }) => ({
    //   token: user.token
    // });

    const handleLogout = async () => {
      const { navigation, clearCredentials } = props;

      clearCredentials();
      navigation.navigate('Login');
    };

    return (
      <View>
        <Text>Profile</Text>
        <Text>{ token }</Text>
        <Button title="Sair" onPress={handleLogout}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </Button>
      </View>
    );
  }
);
