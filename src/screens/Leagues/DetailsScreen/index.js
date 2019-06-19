import React, { Component } from 'react';
import { Animated, View, Picker, RefreshControl, Alert } from 'react-native';

import { ApiCartola } from '../../../api/ApiCartola';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';
import CarouselComponent from '../../../components/Carousel';
import CardTeamComponent from '../../../components/CardTeam';

import StandardHeaderComponent from './StandardHeader';
import LeagueHeaderComponent from './LeagueHeader';
import Awards from './ Awards';
import { RankingOptions, RankingName, Container } from './styled';


export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'campeonato',
      infoLeague: [],
      leagueTeams: [],
      scrollY: new Animated.Value(0),
      isLoading: true,
      isLoadingQuery: false,
      refreshing: false
    };
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const { option } = this.state;
    const leagueSlug = navigation.getParam('leagueSlug');
    const { info, teams } = await this.getTeamDetails(leagueSlug, option);
    this.setState({ infoLeague: info, leagueTeams: teams, isLoading: false });
  };

  getTeamDetails = async (slug, option) => {
    const { code, data } = await ApiCartola.getDetailsLeague(slug, option);
    let response = [];

    if (code === 200) {
      response = data;
    } else {
      const { mensagem } = data;
      Alert.alert(mensagem);
    }
    return response;
  };

  updateOption = async (queryOption) => {
    this.setState({ option: queryOption, isLoadingQuery: true });
    const { infoLeague } = this.state;
    const { teams } = await this.getTeamDetails(infoLeague.slug, queryOption);
    this.setState({ leagueTeams: teams, isLoadingQuery: false });
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const { infoLeague, option } = this.state;
    const { info, teams } = await this.getTeamDetails(infoLeague.slug, option);
    this.setState({ infoLeague: info, leagueTeams: teams, refreshing: false });
  };

  render() {
    const { scrollY, isLoading, infoLeague, leagueTeams, option, isLoadingQuery, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        {
          // eslint-disable-next-line max-len
          <StandardHeaderComponent scrollY={scrollY} infoLeague={infoLeague} backScreen={() => navigation.goBack()} />
        }
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
            // eslint-disable-next-line max-len
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <LeagueHeaderComponent isSubscribe infoLeague={infoLeague} />
            <CarouselComponent componentContainer={<Awards />} />
            <RankingOptions>
              <RankingName>Ranking por</RankingName>
              <View style={{ flex: 1 }}>
                <Picker style={{ color: '#000' }} selectedValue={option} onValueChange={this.updateOption}>
                  <Picker.Item label="Campeonato" value="campeonato" />
                  <Picker.Item label="Turno" value="turno" />
                  <Picker.Item label="Última Rodada" value="rodada" />
                  <Picker.Item label="Mês" value="mes" />
                  <Picker.Item label="Patrimônio" value="patrimonio" />
                </Picker>
              </View>
            </RankingOptions>
            {isLoadingQuery ? (
              <ActivityIndicatorComponent />
            ) : (
              leagueTeams.map(team => <CardTeamComponent key={team.id} team={team} />)
            )}
          </Animated.ScrollView>
        )}
      </Container>
    );
  }
}
