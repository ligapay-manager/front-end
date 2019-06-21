import React, { Component } from 'react';
import styled from 'styled-components';


export const Card = styled.TouchableOpacity`
  margin-horizontal: 15px;
  align-items: center;
  flex-direction: row;
  height: 90px;
  width: null;
`;
export const InfoLeague = styled.Text`
  font-size: 13;
  text-align: justify;
  margin-bottom: 2px;
  font-family: 'Abel-Regular';
`;

export const TitleLeague = styled.Text`
  font-size: 17;
  font-weight: bold;
`;
export const LeagueInfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`;

export const LeagueImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export default class CardLeagueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { league, leagueClicked } = this.props;

    let leagueType = '';
    let leagueRestriction = '';

    if (league.mata_mata) {
      leagueType = 'LIGA MATA-MATA';
    } else {
      leagueType = 'LIGA CLÁSSICA';
    }

    if (league.restriction === 'A' || league.restriction === 'Aberta') {
      leagueRestriction = 'ABERTA';
    } else if (league.restriction === 'M' || league.restriction === 'Moderada') {
      leagueRestriction = 'MODERADA';
    } else {
      leagueRestriction = 'FECHADA';
    }

    if (league.cartoleiros === null) {
      league.cartoleiros = 0;
    }
    return (
      <Card onPress={() => leagueClicked()}>
        <LeagueImage source={{ uri: league.image }} />
        <LeagueInfoContainer>
          <TitleLeague>{league.name}</TitleLeague>
          <InfoLeague>{`${leagueType} | ${leagueRestriction}`}</InfoLeague>
          <InfoLeague>{`${league.cartoleiros} Cartoleiros`}</InfoLeague>
        </LeagueInfoContainer>
      </Card>
    );
  }
}
