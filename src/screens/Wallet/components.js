import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
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
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
`;

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px;
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

export const AmountText = styled.Text`
  margin-top: 30px;
  font-size: 30px;
  color: #fff;
  font-family: 'Abel-Regular';
`;

export const CardsContainer = styled.View`
  flex: 2;
  background-color: #fbfbfb;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 90%;
  elevation: 1px;
  background-color: #fff;
  border-radius: 4px;
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
