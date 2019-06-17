import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import CardLeague from '../ComponentsLeague/CardLeague';
import View from '../../../components/View';
import { InputSearch, ContainerIconFilter, Content } from './styled';
import { ApiCartola } from '../../../api/ApiCartola';


class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <InputSearch
        onChangeText={text => navigation.getParam('SearchFilterFunction')(text)}
        autoCorrect={false}
        placeholder="Clique aqui para pesquisar..."
        autoCompleteType="off"
        placeholderTextColor="#ffffff"
        selectionColor="#000000"
      />
    ),
    headerRight: (
      <ContainerIconFilter>
        <Icon name="md-options" size={25} color="#ffffff" />
      </ContainerIconFilter>
    ),
    headerStyle: {
      backgroundColor: '#14995D'
    },
    headerTintColor: '#ffffff'
  });

  constructor(props) {
    super(props);
    this.state = { dataSource: null, arrayholder: null, isLoading: true, refreshing: false };
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    navigation.setParams({ SearchFilterFunction: this.SearchFilterFunction });
    const ligas = await ApiCartola.getLigas();
    console.log(ligas);
    this.setState({ dataSource: ligas, arrayholder: ligas, isLoading: false });
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const ligas = await ApiCartola.getLigas();
    this.setState({ dataSource: ligas, arrayholder: ligas, isLoading: false, refreshing: false });
  };

  SearchFilterFunction = (text) => {
    const { arrayholder } = this.state;
    const newData = arrayholder.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource, isLoading, refreshing } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        {isLoading ? (
          <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#14995D" />
          </View>
        ) : (
          <ScrollView
            // eslint-disable-next-line max-len
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
          >
            <Content>
              {dataSource.map(league => (league.restriction === 'Fechada' ? null : (
                <CardLeague
                  league={league}
                  key={league.id}
                  leagueClicked={() => navigation.navigate('DetailsScreen', { leagueSlug: league.slug })}
                />
              )))}
            </Content>
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(SearchScreen);
