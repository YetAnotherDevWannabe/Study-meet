import { Text, View } from "react-native";
import { Button } from "react-native-web";

export default function ScreenA({route, navigation})
{
	return (
		<View style={{flex:1, backgroundColor:'#FD0'}}>
			<Text>ScreenA</Text>
			<Button title="Access screen B" onPress={() => [
				navigation.navigate('ScreenB')
			]} />
			<Button title="Access screen C" onPress={() => [
				navigation.navigate('ScreenC')
			]} />
		</View>
	)
}