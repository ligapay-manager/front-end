import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';


const Player = styled.View`
  background-color: #ffffff;
  margin: 5px 15px 5px 15px;
  elevation: 3px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;

const PlayerImage = styled.Image`
  height: 80;
  width: 80;
`;

const PlayerInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

const PlayerName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const PlayerStatistic = styled.View`
  align-items: center;
`;

const PlayerContainerStatistic = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export default class CardPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { player } = this.props;
    return (
      <Player>
        <PlayerImage source={{ uri: player.foto.replace('FORMATO', '140x140') }} />
        <PlayerInfo>
          <PlayerName>{player.apelido}</PlayerName>
          <PlayerContainerStatistic>
            <PlayerStatistic>
              <Text>{`C$ ${player.preco_num}`}</Text>
              <Text>Preço</Text>
            </PlayerStatistic>
            <PlayerStatistic>
              <Text>{player.variacao_num}</Text>
              <Text>Var.(C$)</Text>
            </PlayerStatistic>
            <PlayerStatistic>
              <Text>{player.media_num}</Text>
              <Text>Média</Text>
            </PlayerStatistic>
            <PlayerStatistic>
              <Text>{player.pontos_num}</Text>
              <Text>Última</Text>
            </PlayerStatistic>
            <PlayerStatistic>
              <Text>{player.jogos_num}</Text>
              <Text>Jogos</Text>
            </PlayerStatistic>
          </PlayerContainerStatistic>
        </PlayerInfo>
      </Player>
    );
  }
}
