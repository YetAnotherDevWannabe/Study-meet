import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

// import Screens
import HomeScreen from './src/screens/HomeScreen';
import ScreenMessages from './src/screens/ScreenMessages';
import ScreenFAQ from './src/screens/ScreenFAQ';
import ScreenProfil from './src/screens/ScreenProfil';
import ScreenConnect from './src/screens/ScreenConnect';

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions = {{headerShown: false}}>
      <TabNav.Screen
          name = "Connexion"
          component = { ScreenConnect }
          options = {{ tabBarIcon: ({size, color}) => (<Icon name={"log-in-outline"} color={color} size={size} />) }}
        /> 
          <TabNav.Screen
          name = "Home"
          component = { HomeScreen }
          options = {{ tabBarIcon: ({size, color}) => (<Icon name={"home-outline"} color={color} size={size} />) }}
        />
        <TabNav.Screen
          name = "Messages"
          component = { ScreenMessages }
          options = {{ tabBarIcon: ({size, color}) => (<Icon name={"chatbubbles-outline"} color={color} size={size} />) }}
        />
        <TabNav.Screen
          name = "FAQ"
          component = { ScreenFAQ }
          options = {{ tabBarIcon: ({size, color}) => (<Icon name={"help-circle-outline"} color={color} size={size} />) }}
        />
        <TabNav.Screen
          name = "Profil"
          component = { ScreenProfil }
          options = {{ tabBarIcon: ({size, color}) => (<Icon name={"person-circle-outline"} color={color} size={size} />) }}
        /> 
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