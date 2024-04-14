import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import DiscoverScreen from './screen/DiscoverScreen';
import { NavigationContainer } from '@react-navigation/native';
import ForeignScreen from './screen/ForeignScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (

   
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: 'black',
      
      tabBarStyle:{
        position: 'absolute',
        margin: 15,
        borderRadius: 15,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        shadowColor: 'black',
        backgroundColor: 'white',
        height: 60
      }
    }}>
      <Tab.Screen name="Ana sayfa" component={HomeScreen} options={{headerShown: false,tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />}} />
      <Tab.Screen name="Keşfet" component={DiscoverScreen} options={{headerShown: false,tabBarIcon: ({color}) => <FontAwesome name="search" size={24} color={color} />}}/>
      <Tab.Screen name="Yabancı" component={ForeignScreen} options={{headerShown: false,tabBarIcon: ({color}) => <MaterialIcons name="language" size={24} color={color} />}}/>
    </Tab.Navigator>
  
  );
}