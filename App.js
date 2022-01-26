import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { creatBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import HomeScreen from './src/screens/MessagesScreen';
import HomeScreen from './src/screens/SettingsScreen';

const TabNav = creatBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOption={{headerShown:false}}>
        <TabNav.Screen name="Home" component={HomeScreen} />
        <TabNav.Screen name="Messages" component={MessagesScreen} />
        <TabNav.Screen name="Settings" component={SettingsScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
	title: {
    fontSize:18,
		fontWeight:700,
		backgroundColor: '#FF0',
		padding:20,
		borderRadius:10,
	},
});
