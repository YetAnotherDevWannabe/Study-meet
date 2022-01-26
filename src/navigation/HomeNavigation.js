import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import ScreenC from "../screens/ScreenC";

const StackNav = createStackNavigator();

export default function HomeNavigation()
{
	return (
		<StackNav.Navigator>
			<StackNav.Screen name="ScreenA" component={ScreenA} options={{headerShown:false}} />
			<StackNav.Screen name="ScreenB" component={ScreenB} />
			<StackNav.Screen name="ScreenC" component={ScreenC} />
		</StackNav.Navigator>
	)
}