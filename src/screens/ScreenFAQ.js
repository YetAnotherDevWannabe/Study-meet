import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DisplayCardQuestion from "../components/CardFaq";

export default function ScreenFAQ({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor: "red"}}>
			<View>
				<Text style={styles.category}>
					Communautaire
				</Text>
			</View>
			<View style={styles.row}>
				<DisplayCardQuestion></DisplayCardQuestion>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	category: {
		paddingStart: 15,
		fontSize: 20,
	},
	row: {
		flexDirection: "row",
	}
});

