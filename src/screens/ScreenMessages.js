import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";

// export default function ScreenMessages()
const ScreenMessages = () => {
	return (
		<View style={{flex: 1, backgroundColor: '#FF0'}}>

			<Text>ScreenMessages</Text>

			<Image
				style = { styles.avatar }
				source = { require('../../assets/female.png') }
			/>
			<Text>Emma Tyler</Text>
			<Text>Emma vous a envoyé un message. Souhaitez-vous prendre contact avec elle ?</Text>

			<Image
				style = { styles.avatar }
				source = { require('../../assets/male.png') }
			/>
			<Text>John Wick</Text>
			<Text>Oui, pas de soucis, je présume qu'on peut se retrouver en ville la semaine prochaine, proche d...</Text>

		</View>
	)
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },

    avatar: {
      height: 32,
      width: 32,
      resizeMode: 'stretch',
    },
  });

export default ScreenMessages;