import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import ActionButton from 'react-native-action-button';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import View from '../../components/View';
import CardLeague from './CardLeague';
import HeaderCategory from './CategoryLeague';
import { ApiCartola } from '../../api/ApiCartola';


export default class MyLeagues extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Ligas',
    headerStyle: {
      backgroundColor: '#14995D'
    },
    headerTitleStyle: {
      color: '#ffffff'
    }
  });

  constructor(props) {
    super(props);
    this.state = { dataSource: [], isLoading: true, refreshing: false };
  }

  componentDidMount = async () => {
    const leagues = await ApiCartola.getMinhasLigas();
    this.setState({ dataSource: leagues, isLoading: false });
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const leagues = await ApiCartola.getMinhasLigas();
    this.setState({ dataSource: leagues, isLoading: false, refreshing: false });
  };

  leagueClicked(slug) {
    const { navigation } = this.props;
    navigation.navigate('DetailsMyLeague', { leagueSlug: slug });
  }

  render() {
    const { navigation } = this.props;
    const { dataSource: leagues, isLoading, refreshing } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#14995D" />
          </View>
        ) : (
          <ScrollView
            // eslint-disable-next-line max-len
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <HeaderCategory name="Que sou Dono" actionName="Ver todas" />

            {leagues.map(league => (league.owner ? (
            // eslint-disable-next-line max-len
              <CardLeague league={league} key={league.id} leagueClicked={() => this.leagueClicked(league.slug)} />
            ) : null))}

            <HeaderCategory name="Que Participo" actionName="Ver todas" />

            {leagues.map(league => (league.owner ? null : (
            // eslint-disable-next-line max-len
              <CardLeague league={league} key={league.id} leagueClicked={() => this.leagueClicked(league.slug)} />
            )))}
          </ScrollView>
        )}

        <ActionButton
          renderIcon={() => <IconMaterial name="shield-search" color="#fff" size={25} />}
          buttonColor="#14995D"
          hideShadow
          size={50}
          fixNativeFeedbackRadius
          zIndex={1}
          elevation={4}
          onPress={() => navigation.navigate('SearchLeague')}
        />
      </View>
    );
  }
}
