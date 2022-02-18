import { Image, Text, View, TouchableOpacity, StyleSheet, ScrollView, Button } from "react-native";
import DisplayCardQuestion from "../components/CardFaq";
import { hsc, wsc } from "../G";

export default function ScreenFAQ({route, navigation})
{
	console.log("Route", route)

	function onPressDisplay(id) {
		console.log("Press",id)
		navigation.navigate("Profil")
	}

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View >
					<Text style={styles.category}>
					Les dernières questions de la communauté :
					</Text>
				</View>
				<View>
					<View style={styles.row}>
						<DisplayCardQuestion onPress={onPressDisplay} id={0}></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<TouchableOpacity style={styles.plusInfo}>
						<Text style={styles.contentInfo}>Voir Plus</Text>
					</TouchableOpacity>
				</View>
				<View >
					<Text style={styles.category}>
						Questions les plus populaires :
					</Text>
				</View>
				<View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<View style={styles.row}>
						<DisplayCardQuestion></DisplayCardQuestion>
					</View>
					<TouchableOpacity style={styles.plusInfoBot}>
						<Text style={styles.contentInfo}>Voir Plus</Text>
					</TouchableOpacity>
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
	row: {
		flexDirection: "row",
	},
	plusInfo: {
		paddingTop: 10,
	},
	contentInfo: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 15,
	},
	plusInfoBot: {
		marginBottom: 10,
	},
});

