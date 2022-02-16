import { Button, Image, Text, View, StyleSheet } from "react-native";
import { ButtonStudent } from '../components/ButtonStudent.js';

const styles = StyleSheet.create({
	container: {
	  paddingTop: 50,
	},
	tinyLogo: {
	  width: 50,
	  height: 50,
	},
	logo: {
	  width: 66,
	  height: 58,
	},
  });

export default function ScreenChoiceLanguage({route, navigation})
{
	console.log("Route", route)

	return (
		<View style={{flex:1, backgroundColor:'#FFF'}}>
			<Text>ScreenChoiceLanguage</Text>
      		<ButtonStudent text='test' onPress={() => {
				navigation.navigate('ScreenConnect')
			}} />


			{/* <Image
				style={styles.logo}
				source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
				}}
			>
			</Image> */}
		</View>
	)
}