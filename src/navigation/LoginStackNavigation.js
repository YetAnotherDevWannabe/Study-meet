import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ScreenConnect from "../screens/ScreenConnect";

const LoginStackNav = createStackNavigator();

export default function LoginStackNav()
{
	return (
		<LoginStackNav.Navigator screenOptions={{headerShown:false}} >
			<LoginStackNav.Screen name="HomeScreen" component={HomeScreen} />
			<LoginStackNav.Screen name="ScreenConnect" component={ScreenConnect} />
		</LoginStackNav.Navigator>
	)
}