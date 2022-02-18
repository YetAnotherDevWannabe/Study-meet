import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageBg from "../components/ImageBg.js"
import DisplayGoodStuff from "../components/GoodStuff";
import ProfileDescription from "../components/ProfileDescription.js";
import DisplayNearStudent from "../components/NearStudent";
import {hsc, wsc} from "../G.js";

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
				<View>
				<View >
					<Text style={styles.txtInterets}>
						Contact.
					</Text>
					<View style={styles.row}>
						<DisplayNearStudent></DisplayNearStudent>
						<DisplayNearStudent></DisplayNearStudent>
						<DisplayNearStudent></DisplayNearStudent>
						<DisplayNearStudent></DisplayNearStudent>
					</View>
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