import React, { Component } from 'react';
import { Text, RefreshControl, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardNotificationComponent from './CardNotification';
import ActivityIndicatorComponent from '../../../components/ActivityIndicator';


const notifications = [
  {
    id: 1,
    description: 'Fulano entrou na sua liga. Dê uma olhada',
    time: '14 de jan ás 22:57'
  },
  {
    id: 2,
    description: 'Você recebeu R$200,00 pelo prêmio da segunda rodada do campeonato da liga Cassiano ligas.',
    time: '16 de jan ás 10:00'
  },
  {
    id: 3,
    description: 'O mercado de vai fechar amanhã, não esqueça de rever sua escalação!',
    time: '18 de jan ás 20:00'
  },
  {
    id: 4,
    description: 'Você recebeu um convite para participar da liga Fura-olho.',
    time: '19 de jan ás 13:57'
  },
  {
    id: 5,
    description: 'Fulano deixou sua liga.',
    time: '20 de jan ás 14:57'
  }
];

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: ['sda'], isLoading: true, refreshing: false };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.setState({ refreshing: false });
  };

  render() {
    const { isLoading, dataSource, refreshing } = this.state;
    if (isLoading) {
      return <ActivityIndicatorComponent />;
    }
    if (dataSource.length === 0) {
      return (
        <ScrollView
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          refreshing={refreshing}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
        >
          <Icon name="bell-off-outline" size={100} />
          <Text> Ops... Você não tem nenhuma notificação. </Text>
          <Text>Tente atualizar ou reveja suas configurações.</Text>
        </ScrollView>
      );
    }

    return (
      <ScrollView
        refreshing={refreshing}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} colors={['#14995D']} />}
      >
        {notifications.map(notification => (
          <CardNotificationComponent notification={notification} key={notification.id} />
        ))}
      </ScrollView>
    );
  }
}
