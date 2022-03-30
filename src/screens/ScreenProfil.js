import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import ImageBg from "../components/ImageBg.js"
import DisplayGoodStuff from "../components/GoodStuff";
import ProfileDescription from "../components/ProfileDescription.js";
import DisplayNearStudent from "../components/NearStudent";
import {hsc, wsc} from "../G.js";


import img from './../../assets/TestingGirl.jpg'
const imgTest = Image.resolveAssetSource(img).uri

import meal from './../../assets/Meal.jpg'
const imgMeal = Image.resolveAssetSource(meal).uri


// const test =()=> {

	// fetch('https://dev-api-study-meet.pantheonsite.io/wp-json/wp/v2/users/me')
	// 	.then((response) => {
	// 		// console.log(response);
	// 		return response.json();

	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
// }
// test(); 

export default function ScreenProfil()
{


	return (

		<ScrollView>
			<View style={{flex:1, backgroundColor:'#FFF'}}>
				<View style={styles.imgBg}>
					<ImageBg />
				</View>
				<View>
					<ProfileDescription />
				</View>
				<View  style={{top: -50}}>
				<View>
					<View >
						<Text style={styles.txtInterets}>
							Les centres d'interets.
						</Text>
					</View>
					<View style={styles.row}>
						<DisplayGoodStuff image={imgMeal}/>
						<DisplayGoodStuff image={imgMeal}/>
						<DisplayGoodStuff image={imgMeal}/>
					</View>
					<View style={styles.row}>
						<DisplayGoodStuff image={imgMeal}/>
						<DisplayGoodStuff image={imgMeal}/>
						<DisplayGoodStuff image={imgMeal}/>
					</View>
				</View>
				<View>
					<Text style={styles.txtInterets}>
						Contact.
					</Text>
					<View style={styles.row}>
						<ScrollView horizontal showsHorizontalScrollIndicator={false} >
								<DisplayNearStudent image={imgTest} text="User"/>
								<DisplayNearStudent image={imgTest} text="User"/>
								<DisplayNearStudent image={imgTest} text="User"/>
								<DisplayNearStudent image={imgTest} text="User"/>
						</ScrollView>
					</View>

				</View>
			</View>
		</View>
	</ScrollView>
	)
}


const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		padding: 15,
	},
	txtInterets: {
		paddingLeft: 25,
		fontWeight: 'bold',
	},
	imgBg: {
		width: wsc,
		height: hsc*0.2,
	}
});