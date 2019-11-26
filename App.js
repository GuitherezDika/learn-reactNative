import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreens from './src/screens/ComponentScreens';
import CallText from './src/screens/CallText';
import ListScreen from './src/screens/ListScreen';
import CustomerList from './src/screens/3.SectionThreeTask';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    Task: CallText,
    List: ListScreen,
    Customer: CustomerList,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
