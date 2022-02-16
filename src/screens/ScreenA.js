import { Button, Text, View } from "react-native";

export default function ScreenA({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#FD0'}}>
			<Text>ScreenA</Text>
			<Button title="Access screen FAQ" onPress={() => {
				navigation.navigate('ScreenFAQ')
			}} />
			<Button title="Access screen Cconnect" onPress={() => {
				navigation.push('ScreenFAQ')
				navigation.navigate('ScreenConnect')
			}} />
		</View>
	)
}