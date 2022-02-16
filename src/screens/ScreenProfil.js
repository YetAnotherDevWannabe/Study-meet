import { Text, View } from "react-native";
import { StylizedButton } from "../components/StylizedButton/StylizedButton.js";
import Dropdown from "../components/Dropdown.js";

export default function ScreenProfil()
{
	return (
		<View style={{flex:1, backgroundColor:'#9FF'}}>
			<Text>Choisissez votre langue : </Text>
		<Dropdown />
			<StylizedButton buttonStyle="btn--primary--primary" buttonSize="btn--medium" children="Valider" ></StylizedButton>
			<StylizedButton buttonStyle="btn--primary--outline" buttonSize="btn--medium" children="Retour" ></StylizedButton>
		</View>
	)
} 