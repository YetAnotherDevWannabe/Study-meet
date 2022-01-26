import { createStackNavigator } from "@react-navigation/stack";

const StackNav = createStackNavigator();

export default function HomeNavigation()
{
	return
	(
		<StackNav.Navigator>
			<StackNav.Screen name="ScreenA" component={} />
			<StackNav.Screen name="ScreenB" component={} />
			<StackNav.Screen name="ScreenC" component={} />
		</StackNav.Navigator>
	)
}