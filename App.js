import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreens from './src/screens/ComponentScreens';
import CallText from './src/screens/CallText';
import ListScreen from './src/screens/ListScreen';
import CustomerList from './src/screens/3.SectionThreeTask';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CurrentCount from './src/screens/CurrentCount';
import TextScreen from './src/screens/TextScreen';
import SimplePassword from './src/screens/SimplePassword';
import BoxScreen from './src/screens/BoxScreen';
import BoxScreenExercise from './src/screens/BoxScreenExercise';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    Task: CallText,
    List: ListScreen,
    Customer: CustomerList,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color : ColorScreen,
    Square : SquareScreen,
    Count: CurrentCount,
    Text:TextScreen,
    Password: SimplePassword,
    Box : BoxScreen,
    BoxExercise: BoxScreenExercise,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
