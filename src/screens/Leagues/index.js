import { createStackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';


const LeagueStack = createStackNavigator({
  MainScreen,
  SearchScreen
});

export default LeagueStack;
