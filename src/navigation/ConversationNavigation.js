import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenMessages from "../screens/ScreenMessages";
import ScreenConversation from "../screens/ScreenConversation";

const ConversationNav = createNativeStackNavigator();

export default function ConversationNavigation(navigation)
{
	return (
		<ConversationNav.Navigator>
			<ConversationNav.Screen 
				name="Message" 
				component={ScreenMessages} 
				options={{headerShown:false}} />
			<ConversationNav.Screen 
				name="Conversation" 
				component={ScreenConversation} 
				options={({route}) => ({
					title: route.params.userName,
					headerBackTitleVisible: false,
				})} />
		</ConversationNav.Navigator>
	)
}