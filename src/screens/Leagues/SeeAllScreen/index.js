import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import ApiCartola from '../../../api/ApiCartola';
import { Creators as actions } from '../../../store/ducks/user';
import CardLeagueComponent from '../../../components/CardLeague';
import { Container, TextContainer, TextMessage, Category, CategoryName } from './styled';


class AllSeeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('titleHeader')
  });

  constructor(props) {
    super(props);
    this.state = { leaguesClassic: [], leaguesMata: [], refreshing: false };
  }

  componentWillMount() {
    const { leagues } = this.props;
    const { leaguesMata, leaguesClassic } = this.filterLeagues(leagues);
    this.setState({ leaguesClassic, leaguesMata });
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const leagues = await this.getLigas();
    const { leaguesMata, leaguesClassic } = this.filterLeagues(leagues);
    this.setState({ leaguesMata, leaguesClassic, refreshing: false });
  };

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

  filterLeagues(leagues) {
    const { navigation } = this.props;
    const leaguesClassic = [];
    const leaguesMata = [];
    let array = [];

    if (navigation.getParam('isLeagueOwner')) {
      array = leagues.leaguesOwner;
    } else {
      array = leagues.leaguesSubscribe;
    }

    for (let index = 0; index < array.length; index += 1) {
      if (array[index].mata_mata) {
        leaguesMata.push(array[index]);
      } else {
        leaguesClassic.push(array[index]);
      }
    }

    return { leaguesMata, leaguesClassic };
  }

  renderContainer(categoryName, leagues) {
    const { navigation } = this.props;

    if (leagues.length === 0) {
      return (
        <Container>
          <Category>
            <CategoryName>{categoryName}</CategoryName>
          </Category>
          <TextContainer>
            {navigation.getParam('isLeagueOwner') ? (
              <TextMessage>{`Você não é presidente de nenhuma liga ${categoryName}`}</TextMessage>
            ) : (
              <TextMessage>{`Você não participa de nenhuma liga ${categoryName}`}</TextMessage>
            )}
          </TextContainer>
        </Container>
      );
    }
    return (
      <Container>
        <Category>
          <CategoryName>{categoryName}</CategoryName>
        </Category>
        {leagues.map(league => (
          <CardLeagueComponent
            league={league}
            key={league.id}
            leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
          />
        ))}
      </Container>
    );
  }

  render() {
    const { leaguesClassic, leaguesMata, refreshing } = this.state;
    return (
      <Container>
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
        >
          {this.renderContainer('Clássica', leaguesClassic)}
          {this.renderContainer('Mata-a-Mata', leaguesMata)}
        </ScrollView>
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
)(AllSeeScreen);
