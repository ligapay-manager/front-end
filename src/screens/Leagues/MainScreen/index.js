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
    this.state = { leaguesOwner: [], leaguesSubscribe: [], isLoading: true, refreshing: false };
  }

  componentDidMount = async () => {
    const { leaguesOwner, leaguesSubscribe } = await this.getLigas();
    this.setState({ leaguesOwner, leaguesSubscribe, isLoading: false });
  };

  getLigas = async () => {
    const { code, data } = await ApiCartola.getMinhasLigas();
    const response = {
      leaguesOwner: [],
      leaguesSubscribe: []
    };

    if (code === 200) {
      for (let index = 0; index < data.length; index += 1) {
        if (data[index].owner) {
          response.leaguesOwner.push(data[index]);
        } else {
          response.leaguesSubscribe.push(data[index]);
        }
      }
    } else {
      const { mensagem } = data;
      Alert.alert(mensagem);
    }
    return response;
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const { leaguesOwner, leaguesSubscribe } = await this.getLigas();
    this.setState({ leaguesOwner, leaguesSubscribe, refreshing: false });
  };

  leagueClicked(slug) {
    const { navigation } = this.props;
    navigation.navigate('DetailsScreen', { leagueSlug: slug });
  }

  render() {
    const { navigation } = this.props;
    const { leaguesOwner, leaguesSubscribe, isLoading, refreshing } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <ScrollView
            // eslint-disable-next-line max-len
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <HeaderCategory name="Que sou Presidente" actionName="Ver todas" />

            {leaguesOwner.map(league => (
              <CardLeague
                league={league}
                key={league.id}
                leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
              />
            ))}

            <HeaderCategory name="Que Participo" actionName="Ver todas" />

            {leaguesSubscribe.map(league => (
              <CardLeague
                league={league}
                key={league.id}
                leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
              />
            ))}
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
