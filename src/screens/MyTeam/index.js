import { createStackNavigator } from 'react-navigation';
import Team from './TeamScreen';
import PlayerDetails from './PlayerDetailsScreen';


const StackTeam = createStackNavigator({
  Team: {
    screen: Team,
    navigationOptions: {
      header: null
    }
  },
  PlayerDetails
});

export default StackTeam;
