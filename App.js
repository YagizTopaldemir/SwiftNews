
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './tabscreen';
import Webviewscreen from './screen/webviewscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName='TabScreen'>
      <Stack.Screen name="TabScreen" component={TabScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Webview" component={Webviewscreen} options={{headerShown: false}}/>
  
    </Stack.Navigator>
    </NavigationContainer>
  );
}