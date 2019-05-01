import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import View from '../components/View';
import Button from '../components/Button';

import * as actions from '../redux/reducers/user/actions';

// class Example extends React.Component {
//   handleLogout = async () => {
//     const { navigation, clearCredentials } = this.props;

//     clearCredentials();
//     navigation.navigate('Login');
//   };

//   render() {
//     return (
//       <View>
//         <Button title="Sair" onPress={this.handleLogout}>
//           <Text style={{ color: '#fff' }}>Sair</Text>
//         </Button>
//       </View>
//     );
//   }
// }

// export default connect(
//   null,
//   { clearCredentials: actions.clearCredentials }
// )(Example);

// ESCOLHER MELHOR APROACH PARA DECLARACAO DAS CLASSES
export default connect(null, { clearCredentials: actions.clearCredentials })(
  (props) => {
    const handleLogout = async () => {
      const { navigation, clearCredentials } = props;

      clearCredentials();
      navigation.navigate('Login');
    };

    return (
      <View>
        <Button title="Sair" onPress={handleLogout}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </Button>
      </View>
    );
  }
);
