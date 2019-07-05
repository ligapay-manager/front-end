import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Utils from '../../../theme/utils';


export const HEADER_MAX_HEIGHT = 420;
export const HEADER_MIN_HEIGHT = Utils.APPBAR_HEIGHT;
export const HEADER_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const Container = styled.View`
  flex: 1px;
`;

export const TeamHeaderBackground = styled(LinearGradient)`
  height: ${HEADER_HEIGHT};
  width: 100%;
`;

export const TeamImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TextStandard = styled.Text`
  font-family: 'Abel-Regular';
  color: #fff;
`;

export const TeamTitle = styled(TextStandard)`
  font-size: ${Utils.responsiveFontSize(35)};
`;

export const TeamHeaderInfo = styled(TextStandard)`
  font-size: ${Utils.responsiveFontSize(14)};
`;

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid #fff;
  align-items: center;
  margin-top: 7px;
`;

export const ButtonMessage = styled(TextStandard)`
  font-size: 12px;
`;

export const TeamRound = styled.View`
  height: 56;
  width: null;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
`;

export const Team = styled.View`
  background-color: #ffffff;
  margin: 5px 15px 5px 15px;
  elevation: 3px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;
