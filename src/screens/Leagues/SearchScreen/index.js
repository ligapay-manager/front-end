import React, { Component } from 'react';
import { ScrollView, RefreshControl, Alert, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import CardLeague from '../../../components/CardLeague';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';
import View from '../../../components/View';
import { InputSearch, ContainerIconFilter, Content } from './styled';
import { ApiCartola } from '../../../api/ApiCartola';


class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <InputSearch
        onChangeText={text => navigation.getParam('SearchFunction')(text)}
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
    this.state = { nameToSearch: '', dataSource: [], isLoading: false, refreshing: false };
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    navigation.setParams({ SearchFunction: this.SearchFunction });
  };

  getLigas = async (nameLeague) => {
    const { code, data } = await ApiCartola.getLigas(nameLeague);
    let response = [];

    if (code === 200) {
      response = data;
    } else {
      const { mensagem } = data;
      Alert.alert(mensagem);
    }

    return response;
  };

  onRefresh = async () => {
    const { nameToSearch } = this.state;
    if (nameToSearch !== '') {
      this.setState({ refreshing: true });
      const ligas = await this.getLigas(nameToSearch);
      this.setState({ dataSource: ligas, refreshing: false });
    }
  };

  SearchFunction = async (text) => {
    this.setState({ isLoading: true, nameToSearch: text });
    this.setState({ dataSource: await this.getLigas(text), isLoading: false });
  };

  render() {
    const { dataSource, isLoading, refreshing, nameToSearch } = this.state;
    const { navigation } = this.props;

    if (isLoading) {
      return <ActivityIndicatorComponent />;
    }

    if (nameToSearch === '') {
      return (
        <View style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
          <Text>Digite o nome da liga que deseja procurar na barra de pesquisa.</Text>
        </View>
      );
    }

    if (dataSource.length === 0) {
      return (
        <View style={{ flex: 1, marginTop: 10, marginLeft: 10 }}>
          <Text>Não conseguimos achar nenhuma liga com esse nome.</Text>
        </View>
      );
    }
    return (
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  token: user.token
});

export default connect(mapStateToProps)(SearchScreen);
