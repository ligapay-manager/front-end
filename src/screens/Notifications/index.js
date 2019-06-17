import { createStackNavigator } from 'react-navigation';
import NotificationScreen from './MainScreen';
import ConfigScreen from './ConfigScreen';


const NotificationStack = createStackNavigator({
  NotificationScreen,
  ConfigScreen
});

export default NotificationStack;
