import React, { Component } from 'react';
import { Animated, View, Picker } from 'react-native';

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
      isLoadingQuery: false
    };
  }

  updateOption = async (queryOption) => {
    this.setState({ option: queryOption, isLoadingQuery: true });
    const { infoLeague } = this.state;
    const { teams } = await ApiCartola.getDetailsLeague(infoLeague[0].slug, queryOption);
    this.setState({ leagueTeams: teams, isLoadingQuery: false });
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const { option } = this.state;
    const leagueSlug = navigation.getParam('leagueSlug');
    const { info, teams } = await ApiCartola.getDetailsLeague(leagueSlug, option);
    this.setState({ infoLeague: info, leagueTeams: teams, isLoading: false });
  };

  render() {
    const { scrollY, isLoading, infoLeague, leagueTeams, option, isLoadingQuery } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        {
          <StandardHeaderComponent
            scrollY={scrollY}
            infoLeague={infoLeague[0]}
            backScreen={() => navigation.goBack()}
          />
        }

        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
          >
            <LeagueHeaderComponent isSubscribe={false} infoLeague={infoLeague[0]} />
            <CarouselComponent componentContainer={<Awards />} />
            <RankingOptions>
              <RankingName>Ranking por</RankingName>
              <View style={{ flex: 1 }}>
                <Picker selectedValue={option} onValueChange={this.updateOption}>
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
              leagueTeams.map(team => <CardTeamComponent team={team} />)
            )}
          </Animated.ScrollView>
        )}
      </Container>
    );
  }
}
