import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import DisplayNearStudent from "../components/NearStudent";
import DisplayGoodStuff from "../components/GoodStuff";
import DisplayCardQuestion from "../components/CardFaq";
import SearchBar from "../components/SearchBar";

import WebView from 'react-native-webview'

import { hsc, wsc } from "../G";

import img from './../../assets/TestingGirl.jpg'
const imgTest = Image.resolveAssetSource(img).uri

import meal from './../../assets/Meal.jpg'
const imgMeal = Image.resolveAssetSource(meal).uri

export default function HomeScreen()
{
	return (
			<ScrollView>
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

					<View style={styles.catSection}>
						<Text style={styles.category}>
							Activités autours de vous
						</Text>
						<View style={styles.row}>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
						</View>
						<View style={styles.row}>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
							<DisplayGoodStuff image={imgMeal}></DisplayGoodStuff>
						</View>
					</View>

					<View style={styles.catSection}>
						<Text style={styles.category}>
							Transports
						</Text>
						
						<SearchBar/>
						<View style={styles.map}>
							<WebView source={{html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d173134.47372387716!2d5.0060054!3d47.3099203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d8ceffd9675%3A0x409ce34b31458d0!2s21000%20Dijon!5e0!3m2!1sfr!2sfr!4v1646820129923!5m2!1sfr!2sfr" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}} />	
						</View >
					</View>

					<View style={styles.catSection}>
						<Text style={styles.category}>
							Actus UBFC
						</Text>
						<View style={styles.row}>
							<DisplayCardQuestion></DisplayCardQuestion>
						</View>
					</View>
				</View>
			</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	category: {
		fontWeight: "bold",
		fontSize: 20,
	},
	row: {
		flexDirection: "row",
		padding: 15,
	},
	map: {
		width: wsc - 20,
		height: 220,
		display: "flex",
		textAlign: "center",
	},
	catSection: {
		marginLeft: 10,
	}
});
