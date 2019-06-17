import { createStackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';
import DetailsScreen from './DetailsScreen';


const LeagueStack = createStackNavigator({
  MainScreen,
  SearchScreen,
  DetailsScreen: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LeagueStack;
