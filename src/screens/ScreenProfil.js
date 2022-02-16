import { Button, Text, View } from "react-native";
import Dropdown from "../components/Dropdown.js"

export default function ScreenProfil({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#9FF'}}>
			<Text>Choisissez votre langue : </Text>
		<Dropdown />
		<Button>Valider</Button>
		</View>
	)
}