import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HomeNavigation from './src/navigation/HomeNavigation';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions={{headerShown:false}} >
        <TabNav.Screen name="Home" component={HomeNavigation} />
        <TabNav.Screen name="Messages" component={MessagesScreen} />
        <TabNav.Screen name="Settings" component={SettingsScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

