import { Text, View, StyleSheet } from "react-native";
import DisplayNearStudent from "../components/NearStudent";
import DisplayGoodStuff from "../components/GoodStuff";
import DisplayCardQuestion from "../components/CardFaq";

export default function HomeScreen()
{
	return (
		<View style={{flex:1, overflow: "scroll", height: "100vh"}}>
			<View >
				<Text style={styles.category}>
					Etudiants Proches
				</Text>
				<View style={styles.row}>
					<DisplayNearStudent></DisplayNearStudent>
					<DisplayNearStudent></DisplayNearStudent>
					<DisplayNearStudent></DisplayNearStudent>
					<DisplayNearStudent></DisplayNearStudent>
				</View>
			</View>

			<View >
				<Text style={styles.category}>
					Activités autours de vous
				</Text>
				<View style={styles.row}>
					<DisplayGoodStuff></DisplayGoodStuff>
					<DisplayGoodStuff></DisplayGoodStuff>
					<DisplayGoodStuff></DisplayGoodStuff>
				</View>
				<View style={styles.row}>
					<DisplayGoodStuff></DisplayGoodStuff>
					<DisplayGoodStuff></DisplayGoodStuff>
					<DisplayGoodStuff></DisplayGoodStuff>
				</View>
			</View>

			<View >
				<Text style={styles.category}>
					Transports
				</Text>
				<View style={styles.row}>
					
				</View>
			</View>

			<View >
				<Text style={styles.category}>
					Actus UBFC
				</Text>
				<View style={styles.row}>
					<DisplayCardQuestion></DisplayCardQuestion>
				</View>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	category: {
		margin: 15,
		fontWeight: "bold",
		fontSize: "20px",
	},
	row: {
		flexDirection: "row",
	}
});
