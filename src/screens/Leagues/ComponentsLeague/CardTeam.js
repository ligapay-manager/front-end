import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';


export const TeamContainer = styled.View`
  flex: 1;
  align-items: stretch;
`;

const Team = styled.View`
  flex: 1;
  background-color: #ffffff;
  margin: 5px 5px 5px 5px;
  elevation: 3px;
  border-radius: 5px;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
`;

const TeamRanking = styled.View`
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: #e9e9e9;
  background-color: #f8f8f8;
  width: 40px;
  height: 100%;
  flex-direction: row;
  margin-right: 5px;
`;

export const TeamBodyContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  margin-right: 15px;
`;

export const TeamInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TeamImageContainer = styled.View`
  height: 75px;
  width: 70px;
  margin-right: 5px;
`;

export const TeamImage = styled.Image`
  align-self: center;
  position: absolute;
  z-index: 10;
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ProfileImage = styled.Image`
  z-index: 100;
  height: 30px;
  width: 30px;
  border-radius: ${30 / 2};
  position: absolute;
  top: 39px;
  left: 35px;
`;

export default class CardTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { team } = this.props;
    return (
      <TeamContainer>
        <Team>
          <TeamRanking>
            <Text>{team.ranking}</Text>
          </TeamRanking>
          <TeamBodyContainer>
            <TeamInfoContainer>
              <TeamImageContainer>
                <TeamImage source={{ uri: team.imageTeam }} />
                <ProfileImage source={{ uri: team.imageProfile }} />
              </TeamImageContainer>
              <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{team.name}</Text>
                <Text style={{ fontSize: 12 }}>{team.nameCartola}</Text>
                <Text style={{ fontSize: 10 }}>C$ 20,00 - JP 3/12</Text>
              </View>
            </TeamInfoContainer>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>Parciais</Text>
              <Text>{parseFloat(team.points.parcial).toFixed(2)}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>Total</Text>
              <Text>{parseFloat(team.points.total).toFixed(2)}</Text>
            </View>
          </TeamBodyContainer>
        </Team>
      </TeamContainer>
    );
  }
}
