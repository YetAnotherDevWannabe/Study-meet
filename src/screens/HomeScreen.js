import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import DisplayNearStudent from "../components/NearStudent";
import DisplayGoodStuff from "../components/GoodStuff";
import DisplayCardQuestion from "../components/CardFaq";
import SearchBar from "../components/SearchBar";

import { Icon } from 'react-native-elements';
import WebView from 'react-native-webview'

import { hsc, wsc } from "../G";

import img from './../../assets/TestingGirl.jpg'
const imgTest = Image.resolveAssetSource(img).uri

import meal from './../../assets/Meal.jpg'
const imgMeal = Image.resolveAssetSource(meal).uri

export default function HomeScreen()
{
	return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.container}>
					<View>

						<View style={styles.btnHeader}>
							<View style={styles.segmentLeft}>
								<Icon style={styles.btnMenu}
									name='menu'
									type='MaterialIcons'
									color='black'
								/>
							</View>

							<View style={styles.segmentRight}>
								<Icon style={styles.btnMessage}
									name='mode-comment'
									type='MaterialIcons'
									color='black'
								/>
								<Icon style={styles.btnBell}
									name='notifications'
									type='MaterialIcons'
									color='black'
								/>
							</View>
						</View>
					</View>
					<View>
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
						<View >
							<SearchBar style={styles.searchBar}/>
						</View>
						<View style={styles.map}>
							<WebView source={{html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d173134.47372387716!2d5.0060054!3d47.3099203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29d8ceffd9675%3A0x409ce34b31458d0!2s21000%20Dijon!5e0!3m2!1sfr!2sfr!4v1646820129923!5m2!1sfr!2sfr" width="100%" height="100%" style="" allowfullscreen="" loading="lazy"></iframe>'}} />	
						</View >
					</View>

					<View style={styles.catSection}>
						<Text style={styles.category}>
							Actus UBFC
						</Text>
						<View>
							<View style={styles.row}>
								<DisplayCardQuestion title="Titre de la FAQ" desc="Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus."/>
							</View>
							<View style={styles.row}>
								<DisplayCardQuestion title="Titre de la FAQ" desc="Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus."/>
							</View>
							<View style={styles.row}>
								<DisplayCardQuestion title="Titre de la FAQ" desc="Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus."/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	btnHeader: {
		flex: 1,
		flexDirection: "row",
		padding: 15,
	},
	segmentLeft: {

	},
	segmentRight: {
		flex: 1,
		flexDirection: "row",
		justifyContent:"flex-end",
	},
	btnMessage: {
		marginRight: 10,
	},
	scrollView: {
		width: wsc,
		height: hsc,
	},
	category: {
		fontSize: 20,
		marginLeft: 7,
		marginBottom: 5,
		fontWeight: "bold",
	},
	row: {
		flexDirection: "row",
	},
	map: {
		marginTop: 15,
		marginBottom: 10,
		height: 300,
	},
	catSection: {
	}
});
