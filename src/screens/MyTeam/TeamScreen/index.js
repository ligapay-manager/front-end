import React, { Component } from 'react';
import { ScrollView, RefreshControl, Picker, View, Text } from 'react-native';
import { Container, TeamHeaderBackground, TeamHeaderInfo, TeamRound, TeamImage, TeamTitle } from './styled';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';
import CardPlayer from '../../../components/CardPlayer';
import ApiCartola from '../../../api/ApiCartola';


export default class TeamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      option: 0,
      playerList: [],
      rodada_atual: 0,
      teamInfo: [],
      patrimonio: 0,
      pontos: 0,
      isLoadingQuery: false
    };
  }

  componentDidMount = async () => {
    // eslint-disable-next-line camelcase
    const { atletas, time, patrimonio, pontos, rodada_atual } = await this.getTeam();
    this.setState({
      playerList: atletas,
      teamInfo: time,
      patrimonio,
      pontos,
      isLoading: false,
      rodada_atual,
      option: rodada_atual
    });
  };

  getTeam = async () => {
    const { code, data } = await ApiCartola.getTeam();
    let response = [];

    if (code === 200) {
      response = data;
    }
    return response;
  };

  getTeamRound = async (teamId, round) => {
    const { code, data } = await ApiCartola.getTeamForRound(teamId, round);
    let response = [];

    if (code === 200) {
      response = data;
    }
    return response;
  };

  makeOptionsPicker = (rounds) => {
    const lstOptions = [];
    for (let index = 1; index < rounds + 1; index += 1) {
      lstOptions.push({ label: `Rodada ${index}`, round: index });
    }
    return lstOptions.reverse();
  };

  updateOption = async (round) => {
    this.setState({ option: round, isLoadingQuery: true });
    const { teamInfo } = this.state;
    console.log(round);

    const { atletas, time, patrimonio, pontos } = await this.getTeamRound(teamInfo.time_id, 8);

    this.setState({ playerList: atletas, teamInfo: time, patrimonio, pontos, isLoadingQuery: false });
  };

  render() {
    // eslint-disable-next-line camelcase
    const {
      isLoading,
      isLoadingQuery,
      refreshing,
      option,
      playerList,
      teamInfo,
      patrimonio,
      pontos,
      rodada_atual
    } = this.state;

    const optionPicker = this.makeOptionsPicker(rodada_atual);
    return (
      <Container>
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <TeamHeaderBackground colors={['#14995D', '#14997e']}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TeamImage source={{ uri: teamInfo.url_camisa_png }} />
                <TeamTitle>{teamInfo.nome}</TeamTitle>
                <TeamHeaderInfo>{teamInfo.nome_cartola}</TeamHeaderInfo>
              </View>
              <View
                style={{
                  borderTopColor: '#ffffff',
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 60,
                  width: null,
                  overflow: 'hidden'
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRightColor: '#ffffff',
                    borderRightWidth: 1
                  }}
                >
                  <Text style={{ fontFamily: 'Abel-Regular', color: '#ffffff', fontSize: 20 }}>
                    {`C$${parseFloat(
                      patrimonio
                    ).toFixed(2)}`}
                  </Text>
                  <Text style={{ fontFamily: 'Abel-Regular', color: '#ffffff', fontSize: 20 }}>Patrimônio</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Abel-Regular', color: '#ffffff', fontSize: 20 }}>
                    {parseFloat(pontos).toFixed(2)}
                  </Text>
                  <Text style={{ fontFamily: 'Abel-Regular', color: '#ffffff', fontSize: 20 }}>Pontuação</Text>
                </View>
              </View>
            </TeamHeaderBackground>
            <TeamRound>
              <View style={{ flex: 1 }}>
                <Picker style={{ color: '#000' }} selectedValue={option} onValueChange={this.updateOption}>
                  {optionPicker.map(opt => (
                    <Picker.Item label={opt.label} value={opt.index} />
                  ))}
                </Picker>
              </View>
            </TeamRound>
            {isLoadingQuery ? (
              <ActivityIndicatorComponent />
            ) : (
              playerList.map(player => <CardPlayer id={player.atleta_id} player={player} />)
            )}
          </ScrollView>
        )}
      </Container>
    );
  }
}
