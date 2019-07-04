import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import ActionButton from 'react-native-action-button';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { Creators as actions } from '../../../store/ducks/user';
import CardLeague from '../../../components/CardLeague';
import HeaderCategory from './CategoryLeague';
import ApiCartola from '../../../api/ApiCartola';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';
import { Container, TextContainer, TextMessage } from './styled';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { leaguesOwner: [], leaguesSubscribe: [], isLoading: true, refreshing: false };
  }

  async componentDidMount() {
    const { leagues } = this.props;

    if (leagues) {
      this.setState({
        leaguesOwner: leagues.leaguesOwner,
        leaguesSubscribe: leagues.leaguesSubscribe,
        isLoading: false
      });
    } else {
      const { leaguesOwner, leaguesSubscribe } = await this.getLigas();
      this.setState({ leaguesOwner, leaguesSubscribe, isLoading: false });
    }
  }

  async getLigas() {
    const { code, data } = await ApiCartola.getMinhasLigas();
    const { setLeagues, leagues } = this.props;

    if (code === 200) {
      const response = {
        leaguesOwner: [],
        leaguesSubscribe: []
      };

      for (let index = 0; index < data.length; index += 1) {
        if (data[index].owner) {
          response.leaguesOwner.push(data[index]);
        } else {
          response.leaguesSubscribe.push(data[index]);
        }
      }

      setLeagues(response);
      return response;
    }

    showMessage({
      message: 'Cartola em Manutenção',
      description: 'Suas ligas do cartola não puderam ser atualizadas!',
      type: 'warning',
      icon: 'warning'
    });
    return leagues;
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const { leaguesOwner, leaguesSubscribe } = await this.getLigas();
    this.setState({ leaguesOwner, leaguesSubscribe, refreshing: false });
  };

  renderLeagues = (leagues, owner) => {
    const { navigation } = this.props;
    if (leagues.length === 0) {
      return (
        <TextContainer>
          {owner ? (
            <TextMessage>Você não é presidente de nenhuma liga.</TextMessage>
          ) : (
            <TextMessage>Você não participa de nenhuma liga.</TextMessage>
          )}
        </TextContainer>
      );
    }
    return leagues.map(league => (
      <CardLeague
        league={league}
        key={league.id}
        leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
      />
    ));
  };

  renderCategory = (category, owner) => {
    const { navigation } = this.props;
    return (
      <HeaderCategory
        name={category.name}
        actionName={category.nameAction}
        actionIcon={() => navigation.navigate('AllSeeScreen', { titleHeader: category.name, isLeagueOwner: owner })}
      />
    );
  };

  leagueClicked(slug) {
    const { navigation } = this.props;
    navigation.navigate('DetailsScreen', { leagueSlug: slug });
  }

  render() {
    const { leaguesOwner, leaguesSubscribe, isLoading, refreshing } = this.state;
    const { navigation } = this.props;
    if (isLoading) {
      return (
        <Container>
          <ActivityIndicatorComponent />
        </Container>
      );
    }

    return (
      <Container>
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
        >
          {this.renderCategory({ name: 'Que sou Presidente', nameAction: 'Ver todas' }, true)}
          {this.renderLeagues(leaguesOwner, true)}
          {this.renderCategory({ name: 'Que Participo', nameAction: 'Ver todas' }, false)}
          {this.renderLeagues(leaguesSubscribe, false)}
        </ScrollView>

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
      </Container>
    );
  }
}

const mapDispatchToProps = {
  setLeagues: actions.setLeagues
};

const mapStateToProps = (state) => {
  const { user } = state;

  return { leagues: user.leagues };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
