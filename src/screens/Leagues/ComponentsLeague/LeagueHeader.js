import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import Utils from './utils';


export const HEADER_MAX_HEIGHT = 420;
export const HEADER_MIN_HEIGHT = Utils.APPBAR_HEIGHT;
export const HEADER_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const LeagueHeaderBackground = styled(LinearGradient)`
  height: ${HEADER_HEIGHT};
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const LeagueImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TextStandard = styled.Text`
  font-family: 'Abel-Regular';
  color: #fff;
`;

export const LeagueTitle = styled(TextStandard)`
  font-size: ${Utils.responsiveFontSize(35)};
`;

export const LeagueHeaderInfo = styled(TextStandard)`
  font-size: ${Utils.responsiveFontSize(12)};
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

export default class LeagueHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { infoLeague } = this.props;

    let leagueType = '';
    let leagueRestriction = '';

    if (infoLeague.mata_mata) {
      leagueType = 'LIGA MATA-MATA';
    } else {
      leagueType = 'LIGA CLÁSSICA';
    }

    if (infoLeague.restriction === 'A' || infoLeague.restriction === 'Aberta') {
      leagueRestriction = 'ABERTA';
    } else if (infoLeague.restriction === 'M' || infoLeague.restriction === 'Moderada') {
      leagueRestriction = 'MODERADA';
    } else {
      leagueRestriction = 'FECHADA';
    }

    if (infoLeague.cartoleiros === null) {
      infoLeague.cartoleiros = 0;
    }
    return (
      <LeagueHeaderBackground colors={['#14995D', '#14997e']}>
        <LeagueImage source={{ uri: infoLeague.image }} />
        <LeagueTitle>{infoLeague.name}</LeagueTitle>
        <LeagueHeaderInfo>{`${leagueType} | ${leagueRestriction}`}</LeagueHeaderInfo>
        <LeagueHeaderInfo>{`${infoLeague.cartoleiros} Cartoleiros`}</LeagueHeaderInfo>
        <ButtonContainer>
          <ButtonMessage>Participar</ButtonMessage>
        </ButtonContainer>
      </LeagueHeaderBackground>
    );
  }
}
