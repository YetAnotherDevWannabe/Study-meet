import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import ScreenC from "../screens/ScreenC";

const HomeStackNav = createStackNavigator();

export default function HomeStackNavigation()
{
	return (
		<HomeStackNav.Navigator>
			<HomeStackNav.Screen name="ScreenA" component={ScreenA} options={{headerShown:false}} />
			<HomeStackNav.Screen name="ScreenB" component={ScreenB} />
			<HomeStackNav.Screen name="ScreenC" component={ScreenC} />
		</HomeStackNav.Navigator>
	)
}