import { Button, Text, View } from "react-native";

export default function ScreenA({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#FD0'}}>
			<Text>ScreenA</Text>
			<Button title="Access screen A" onPress={() => [
				navigation.navigate('ScreenA')
			]} />
			<Button title="Access screen C" onPress={() => [
				navigation.navigate('ScreenC')
			]} />
		</View>
	)
}