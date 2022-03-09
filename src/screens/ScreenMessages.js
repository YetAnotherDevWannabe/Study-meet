import React from 'react';
import DisplayCardMessage from "../components/CardMessage";
import MyComponent from "../components/SearchBar";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { hsc, wsc } from "../G";

// export default function ScreenMessages()
const ScreenMessages = () => {
	return (

		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View >
					<Text style={styles.title}>
					Messagerie :
					</Text>
				</View>
				<View style={styles.searchbar}>
					<MyComponent></MyComponent>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
					<View style={styles.row}>
				<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
				<View style={styles.row}>
					<DisplayCardMessage user="Utilisateur" lastMsg="Nulla quis lorem ut libero malesuada feugiat..."/>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
    container: {
		paddingTop: 20,
	},
	scrollView: {
		width: wsc,
		height: hsc,
	},
	title: {
		margin: 15,
		fontWeight: "bold",
		fontSize: 18,
		color: "black",
	},
	searchbar: {
		marginBottom: 10,
	},
	row: {
		flexDirection: "row",
	},
  });

export default ScreenMessages;