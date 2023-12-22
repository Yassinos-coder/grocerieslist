import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'


/* Components Import */
import HomeScreen from './Screens/HomeScreen';

/* Navigation Setup */
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Drawer.Screen name='Create List' component={HomeScreen} />
        <Drawer.Screen name='Grocery List' component={HomeScreen} />
        <Drawer.Screen name='History List' component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
