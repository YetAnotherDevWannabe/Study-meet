import { createStackNavigator } from "@react-navigation/stack";
import ScreenChoiceLanguage from "../screens/ScreenChoiceLanguage";
import ScreenChoiceConnect from "../screens/ScreenChoiceConnect";
import ScreenConnect from "../screens/ScreenConnect";

const LoadingStackNav = createStackNavigator();

export default function HomeNavigation()
{
	return (
		<LoadingStackNav.Navigator screenOptions={{headerShown:false}} >
			<LoadingStackNav.Screen name="ScreenChoiceLanguage" component={ScreenChoiceLanguage} />
			<LoadingStackNav.Screen name="ScreenChoiceConnect" component={ScreenChoiceConnect} />
			<LoadingStackNav.Screen name="ScreenConnect" component={ScreenConnect} />
		</LoadingStackNav.Navigator>
	)
}