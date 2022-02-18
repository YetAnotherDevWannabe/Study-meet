import {Text, View, StyleSheet, ScrollView } from "react-native";
import { hsc, wsc } from "../G";

export default function ScreenFAQ({route, navigation})
{
	console.log("Route", route)

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View >
					<Text style={styles.category}>
					Les dernières questions de la communauté :
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: wsc,
		height: hsc,
	},
	category: {
		margin: 15,
		fontWeight: "bold",
		fontSize: 18,
		color: "black",
	},
});

