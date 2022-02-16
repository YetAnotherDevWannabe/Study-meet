import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Screens
// import LoadNavigation from './src/navigation/LoadingStackNavigation';
// import HomeNavigation from './src/navigation/HomeStackNavigation';
import HomeScreen from './src/screens/HomeScreen';
import ScreenChoiceConnect from './src/screens/ScreenChoiceConnect';
import ScreenChoiceLanguage from './src/screens/ScreenChoiceLanguage';
import ScreenConnect from './src/screens/ScreenConnect';
import ScreenMessages from './src/screens/ScreenMessages';
import ScreenSettings from './src/screens/ScreenSettings';

// import components
import { ButtonStudent } from './src/components/ButtonStudent.js';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoadNavigation></LoadNavigation> */}
      <TabNav.Navigator screenOptions = {{headerShown: false}}>
        <TabNav.Screen name="Home" component={HomeScreen}/>
        <TabNav.Screen name="ScreenChoiceConnect" component={ScreenChoiceConnect}/>
        <TabNav.Screen name="ScreenChoiceLanguage" component={ScreenChoiceLanguage}/>
        <TabNav.Screen name="ScreenConnect" component={ScreenConnect}/>
        <TabNav.Screen name="ScreenMessages" component={ScreenMessages}/>
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroungColor: '#fff',
    alignCenter: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});