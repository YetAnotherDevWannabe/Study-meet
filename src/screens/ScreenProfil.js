import { Text, View } from "react-native";
import { StylizedButton } from "../components/StylizedButton/StylizedButton.js";
import Dropdown from "../components/Dropdown.js";

export default function ScreenProfil({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#9FF'}}>
			<Text>Choisissez votre langue : </Text>
		<Dropdown />
		<StylizedButton buttonStyle="btn--primary--primary" buttonSize="btn--medium" >Valider</StylizedButton>
		<StylizedButton buttonStyle="btn--primary--outline" buttonSize="btn--medium" >Retour</StylizedButton>
		</View>
	)
}