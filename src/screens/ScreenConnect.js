import { Button, Text, View } from "react-native";

export default function ScreenConnect({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#FFF'}}>
			<Text>ScreenConnect</Text>
		</View>
	)
}