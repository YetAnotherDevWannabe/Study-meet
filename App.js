import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadNavigation from './src/navigation/LoadingStackNavigation';
import HomeNavigation from './src/navigation/HomeStackNavigation';

import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LoadNavigation></LoadNavigation>
    </NavigationContainer>
  );
}

