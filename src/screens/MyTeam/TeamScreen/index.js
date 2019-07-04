import React, { Component } from 'react';
import { ScrollView, RefreshControl, Picker, View, Text } from 'react-native';
import { Container, TeamHeaderBackground, TeamHeaderInfo, TeamRound, TeamImage, TeamTitle } from './styled';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';
import CardPlayer from '../../../components/CardPlayer';
import ApiCartola from '../../../api/ApiCartola';


export default class TeamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, refreshing: false, option: 'campeonato', playerList: [], teamInfo: [] };
  }

  componentDidMount = async () => {
    const { atletas, time } = await this.getTeam();
    this.setState({ playerList: atletas, teamInfo: time, isLoading: false });
  };

  getTeam = async () => {
    const { code, data } = await ApiCartola.getTeam();
    let response = [];

    if (code === 200) {
      response = data;
    }
    return response;
  };

  render() {
    const { isLoading, refreshing, option, playerList, teamInfo } = this.state;
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
              <View style={{ height: 60, borderTopColor: '#ffffff', width: null, borderWidth: 1 }}>
                <Text>Teste</Text>
              </View>
            </TeamHeaderBackground>
            <TeamRound>
              <View style={{ flex: 1 }}>
                <Picker style={{ color: '#000' }} selectedValue={option} onValueChange={this.updateOption}>
                  <Picker.Item label="Campeonato" value="campeonato" />
                  <Picker.Item label="Turno" value="turno" />
                  <Picker.Item label="Última Rodada" value="rodada" />
                  <Picker.Item label="Mês" value="mes" />
                  <Picker.Item label="Patrimônio" value="patrimonio" />
                </Picker>
              </View>
            </TeamRound>
            {playerList.map(player => (
              <CardPlayer id={player.id} player={player} />
            ))}
          </ScrollView>
        )}
      </Container>
    );
  }
}
