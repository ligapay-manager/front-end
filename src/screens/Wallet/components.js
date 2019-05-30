import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import View from '../../components/View';


export const QRCodeContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 145;
  width: 145px;
  background-color: #fff;
  padding: 5px;
`;

export const WalletView = styled(View)`
  background-color: #14995d;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const AmountContainer = styled.View`
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

export const TransactionContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 250px;
`;

export const IconStyle = styled(Icon)`
  font-size: 20px;
  color: #fff;
  height: 22px;
`;
