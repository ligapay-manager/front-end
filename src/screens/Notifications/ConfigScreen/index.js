import React, { Component } from 'react';
import { CheckBox, RefreshControl, ScrollView } from 'react-native';
import { Container, OptionContainer, OptionText } from './styled';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';


const Options = [
  {
    id: 1,
    description: 'Alguma opção 1'
  },
  {
    id: 2,
    description: 'Alguma opção 2'
  },
  {
    id: 3,
    description: 'Alguma opção 3'
  },
  {
    id: 4,
    description: 'Alguma opção 4'
  },
  {
    id: 5,
    description: 'Alguma opção 5'
  },
  {
    id: 6,
    description: 'Alguma opção 6'
  }
];

export default class ConfigScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Configurações',
    headerStyle: {
      backgroundColor: '#14995D'
    },
    headerTitleStyle: {
      color: '#ffffff'
    },
    headerTintColor: '#fff'
  });

  constructor(props) {
    super(props);
    this.state = { checkBoxChecked: [], isLoading: true, refreshing: false };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: false });
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    this.setState({ refreshing: false });
  };

  checkBoxChanged(id, value) {
    const { checkBoxChecked } = this.state;
    const tempCheckBoxChecked = checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({
      checkBoxChecked: tempCheckBoxChecked
    });
  }

  render() {
    const { checkBoxChecked, isLoading, refreshing } = this.state;
    if (isLoading) {
      return <ActivityIndicatorComponent />;
    }
    return (
      <ScrollView
        // eslint-disable-next-line max-len
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
      >
        <Container>
          {Options.map(option => (
            <OptionContainer>
              <OptionText>{option.description}</OptionText>
              <CheckBox
                value={checkBoxChecked[option.id]}
                onValueChange={() => this.checkBoxChanged(option.id, checkBoxChecked[option.id])}
              />
            </OptionContainer>
          ))}
        </Container>
      </ScrollView>
    );
  }
}
