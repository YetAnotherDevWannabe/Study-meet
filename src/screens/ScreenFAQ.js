import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DisplayCardQuestion from "../components/CardFaq";

export default function ScreenFAQ({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, overflow: "scroll", height: "100vh"}}>
			<View style={styles.top}>
				<Text style={styles.category}>
					Communautaire
				</Text>
			</View>
			<View style={styles.scroll}>
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
});

