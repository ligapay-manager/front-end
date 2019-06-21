import { createStackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';
import DetailsScreen from './DetailsScreen';
import AllSeeScreen from './SeeAllScreen';


const LeagueStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Ligas'
      }
    },
    SearchScreen,
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: {
        header: null
      }
    },
    AllSeeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#14995D'
      },
      headerTintColor: '#ffffff'
    }
  }
);

export default LeagueStack;
