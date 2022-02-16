import { Image, Text, View, StyleSheet } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

<SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>


// const styles = StyleSheet.create({
// 	container: {
// 	  paddingTop: 50,
// 	},
// 	tinyLogo: {
// 	  width: 50,
// 	  height: 50,
// 	},
// 	logo: {
// 	  width: 66,
// 	  height: 58,
// 	},
//   });

export default function ScreenChoiceLanguage({route, App})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#FFF'}}>

			<Text>Sélctionnez votre langue :</Text>
			<SelectDropdown />
		</View>
	)
}

