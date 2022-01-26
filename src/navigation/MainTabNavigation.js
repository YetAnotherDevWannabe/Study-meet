import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTabNav = createBottomTabNavigator();

export default function MainStackNavigation()
{
	return (
		<MainTabNav.Navigator screenOptions={{headerShown:false}} >
			<MainTabNav.Screen name="Home" component={HomeNavigation} />
			<MainTabNav.Screen name="Messages" component={MessagesScreen} />
			<MainTabNav.Screen name="Settings" component={SettingsScreen} />
	  </MainTabNav.Navigator>
	)
}