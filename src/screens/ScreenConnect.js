import React, { useState } from 'react';
import { Button, Text, View, Pressable, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';

export default function ScreenConnect({route, navigation})
{

	const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.imgBlock}>
				<Image style={styles.img} source={require('../../assets/Logo.png')}/>
			</View>
			<SafeAreaView style={styles.SafeArea}>
				<View style={styles.input}>
					<Text style={styles.text}>Adresse Mail</Text>
					<TextInput
						style={styles.textInput}
					/>
				</View>
				<View style={styles.input}>
					<Text style={styles.text}>Mot de Passe</Text>
					<View style={styles.inputContainer}>
						<TextInput
							autoCorrect={false}
							secureTextEntry={true}
							style={styles.inputField}
							autoCapitalize="none"
							autoCorrect={false}
							textContentType="newPassword"
							secureTextEntry={passwordVisibility}
							value={password}
							enablesReturnKeyAutomatically
							onChangeText={text => setPassword(text)}
						/>
						<Pressable onPress={handlePasswordVisibility}>
							<MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
						</Pressable>
					</View>
				</View>
				<View style={styles.buttonBlock}>
					<View style={styles.account}>
						<Text>Vous n’avez pas de compte ?</Text>
						<TouchableOpacity>
							<Text style={styles.signup}> Inscrivez-vous</Text>
						</TouchableOpacity>	
					</View>
					<Button
						style={styles.button}
						title="Se Connecter" 
						color="#BF53A9"
						accessibilityLabel="Learn more about this purple button"/>
				</View>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1, 
		backgroundColor:'#FFF', 
		paddingTop: 40,
	},
	input: {
		marginStart: 30,
		marginBottom: 15,
		marginEnd: 30,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		marginStart: 15,
		marginBottom: 2,
	},
	textInput: {
	  height: 45,
	  borderWidth: 0.5,
	  borderRadius: 10,
	  padding: 10,
	  color: "black",
	},
	inputContainer: {
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 0.5,
	},
	inputField: {
		padding: 10,
		width: '90%'
	},
	imgBlock: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 50,
	},
	img: {
		width: 192,
		height: 150,
		resizeMode: "stretch",
	},
	buttonBlock: {
		margin: 40,
	},
	account: {
		flexDirection:'row', 
		flexWrap:'wrap',
		marginBottom: 5,
	},
	signup: {
		color: "#5593CF",
	},
	button: {
		borderRadius: 30,
	}
  });
  
//  button: {
// 	color: "white",
// 	fontWeight: "bold",
// 	backgroundColor: "#BF53A9",
// }