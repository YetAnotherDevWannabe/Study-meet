import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Screens
import HomeScreen from './src/screens/HomeScreen';
import ScreenMessages from './src/screens/ScreenMessages';
import ScreenFAQ from './src/screens/ScreenFAQ';
import ScreenProfil from './src/screens/ScreenProfil';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoadNavigation></LoadNavigation> */}
      <TabNav.Navigator screenOptions = {{headerShown: false}}>
        <TabNav.Screen name = "Home" component = { HomeScreen }/>
        <TabNav.Screen name = "ScreenMessages" component = { ScreenMessages }/>
        <TabNav.Screen name = "ScreenFAQ" component = { ScreenFAQ }/>
        <TabNav.Screen name = "ScreenProfil" component = { ScreenProfil }/>
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});