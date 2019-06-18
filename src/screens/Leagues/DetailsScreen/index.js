import React, { Component } from 'react';
import { Animated, View, ActivityIndicator } from 'react-native';

import StandardHeader from '../ComponentsLeague/StandardHeader';
import LeagueHeader from '../ComponentsLeague/LeagueHeader';
import Carousel from '../ComponentsLeague/Carousel';
import CardTeam from '../ComponentsLeague/CardTeam';
import { ApiCartola } from '../../../api/ApiCartola';


export const HEADER_MAX_HEIGHT = 420;
export const HEADER_MIN_HEIGHT = 56;
export const HEADER_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class DetailsScreen extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: 'teste',
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     opacity: !navigation.params ? 0 : navigation.getParam('headerTitleOpacity')
  //   },
  //   headerStyle: {
  //     elevation: 0,
  //     backgroundColor: !navigation.params ? '#14995D' : navigation.getParam('headerBackgroundColor')
  //   }
  // });

  constructor(props) {
    super(props);
    this.state = { infoLeague: [], leagueTeams: [], scrollY: new Animated.Value(0), isLoading: true };
  }

  // componentWillMount() {
  //   const { navigation } = this.props;
  //   const { scrollY } = this.state;
  //   navigation.setParams({
  //     headerBackgroundColor: scrollY.interpolate({
  //       inputRange: [0, HEADER_HEIGHT],
  //       outputRange: ['#14995D', '#14997e'],
  //       extrapolate: 'clamp',
  //       useNativeDriver: true
  //     }),
  //     headerTitleOpacity: scrollY.interpolate({
  //       inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
  //       outputRange: [0, 0.5, 1],
  //       extrapolate: 'clamp',
  //       useNativeDriver: true
  //     })
  //   });
  // }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const leagueSlug = navigation.getParam('leagueSlug');
    const { info, teams } = await ApiCartola.getDetailsLeague(leagueSlug);
    this.setState({ infoLeague: info, leagueTeams: teams, isLoading: false });
  };

  render() {
    const { scrollY, isLoading, infoLeague, leagueTeams } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StandardHeader scrollY={scrollY} infoLeague={infoLeague[0]} backScreen={() => navigation.goBack()} />

        {isLoading ? (
          <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#14995D" />
          </View>
        ) : (
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
          >
            <LeagueHeader infoLeague={infoLeague[0]} />
            <Carousel />
            {leagueTeams.map(team => (
              <CardTeam team={team} />
            ))}
          </Animated.ScrollView>
        )}
      </View>
    );
  }
}
