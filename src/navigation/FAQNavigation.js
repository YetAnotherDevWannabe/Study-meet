import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenFaq from "../screens/ScreenFAQ";
import ScreenFaqContent from "../screens/ScreenFAQContent";

const AskNavigation = createNativeStackNavigator();

export default function FAQNavigation(navigation)
{
	return (
		<AskNavigation.Navigator>
			<AskNavigation.Screen 
				name="Ask" 
				component={ScreenFaq} 
				options={{headerShown:false}} />
			<AskNavigation.Screen 
				name="Question" 
				component={ScreenFaqContent} 
				// options={({route}) => ({
				// 	title: route.params.userName,
				// 	headerBackTitleVisible: false,
				// })} 
                />
		</AskNavigation.Navigator>
	)
}