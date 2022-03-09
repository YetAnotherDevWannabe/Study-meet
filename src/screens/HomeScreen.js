import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import DisplayNearStudent from "../components/NearStudent";
import DisplayGoodStuff from "../components/GoodStuff";
import DisplayCardQuestion from "../components/CardFaq";

import { hsc, wsc } from "../G";

import img from './../../assets/TestingGirl.jpg'
const imgTest = Image.resolveAssetSource(img).uri

import meal from './../../assets/Meal.jpg'
const imgMeal = Image.resolveAssetSource(meal).uri

export default function HomeScreen()
{
	return (
			<View style={{flex:1, backgroundColor: "white"}}>
				<View style={{marginTop: 40}}>
					<Text style={styles.category}>
						Etudiants Proches
					</Text>
					<View style={styles.row}>
						<ScrollView horizontal showsHorizontalScrollIndicator={false} >
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="User"/>
							<DisplayNearStudent image={imgTest} text="Emma S. Fitzgerald"/>
						</ScrollView>
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
	container: {
		flex: 1,
	},
	category: {
		margin: 15,
		fontWeight: "bold",
		fontSize: 20,
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: wsc,
	}
});
