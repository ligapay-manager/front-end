import React, { Component } from 'react';
import { ScrollView, RefreshControl, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import View from '../../../components/View';
import CardLeague from '../../../components/CardLeague';
import HeaderCategory from './CategoryLeague';
import { ApiCartola } from '../../../api/ApiCartola';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';


export default class MainScreen extends Component {
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
    const leagues = await this.someFuntion();
    this.setState({ dataSource: leagues, isLoading: false });
  };

  someFuntion = async () => {
    const { code, data } = await ApiCartola.getMinhasLigas();
    let response = [];

    if (code === 200) {
      const { leagues } = data;
      response = leagues;
    } else {
      const { mensagem } = data;
      Alert.alert(mensagem);
    }

    return response;
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const leagues = await this.someFuntion();
    this.setState({ dataSource: leagues, isLoading: false, refreshing: false });
  };

  leagueClicked(slug) {
    const { navigation } = this.props;
    navigation.navigate('DetailsScreen', { leagueSlug: slug });
  }

  render() {
    const { navigation } = this.props;
    const { dataSource: leagues, isLoading, refreshing } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <ScrollView
            // eslint-disable-next-line max-len
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <HeaderCategory name="Que sou Dono" actionName="Ver todas" />

            {leagues.map(league => (league.owner ? (
              <CardLeague
                league={league}
                key={league.id}
                leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
              />
            ) : null))}

            <HeaderCategory name="Que Participo" actionName="Ver todas" />

            {leagues.map(league => (league.owner ? null : (
              <CardLeague
                league={league}
                key={league.id}
                leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
              />
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
          onPress={() => navigation.navigate('SearchScreen')}
        />
      </View>
    );
  }
}
