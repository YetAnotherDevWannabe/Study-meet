import React, { Component, useState } from 'react';
import { Button, Text, View, Pressable, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import {useNavigation} from '@react-navigation/native';

export default function ScreenConnect({route})
{

	const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [erreur, setErreur] = useState('');
	const [validating, setValidating] = useState(false);
	const navigation = useNavigation();

	const validate =()=> {
		setValidating(true);

		let formData = new FormData();
		formData.append('type', 'login');
		formData.append('email', email);
		formData.append('password', password);

		return fetch('https://dev-api-study-meet.pantheonsite.io/authentication.php', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				// console.log(response);
				return response.json()})
			.then((responseJson) => {
				// console.warn(responseJson);
				let userData = responseJson.data;
				// console.log(userData);

				if (userData && saveToStorage(userData))
				{
					setValidating(false);
					/* Redirect to accounts page */
					// console.log('Home');
					navigation.navigate('Home');
					return true;
				} 
				/* A log message that is used to debug the code. */
				// console.log('Failed to store auth');
				setErreur('Email ou Mot de passe incorrect');
				return false;
			})
			.catch((error) => {
				console.error(error);
			});
	}



	const saveToStorage = async (userData) => {
		if (userData)
		{
			await AsyncStorage.setItem('user', JSON.stringify({
					isLoggedIn: true,
					authToken: userData.auth_token,
					id: userData.user_id,
					name: userData.user_login
				})
			);
			// console.log(userData.user_login);
			return true;
		}
		return false;
	}

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
						autoCapitalize="none"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
				<View style={styles.input}>
					<Text style={styles.text}>Mot de Passe</Text>
					<View style={styles.inputContainer}>
						<TextInput
							autoCorrect={false}
							style={styles.inputField}
							autoCapitalize="none"
							textContentType="newPassword"
							value={password}
							enablesReturnKeyAutomatically
							// secureTextEntry={true}
							secureTextEntry={passwordVisibility}
							onChangeText={text => setPassword(text)}
						/>
						<Pressable onPress={handlePasswordVisibility}>
							<MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
						</Pressable>
					</View>
				</View>
				<View style={styles.buttonBlock}>
					<View style={styles.account}>
						<Text>Vous n'avez pas de compte ?</Text>
						<TouchableOpacity>
							<Text style={styles.signup} onPress={() => { navigation.navigate('ScreenConnect') }}> Inscrivez-vous</Text>
						</TouchableOpacity>
					</View>
					<Button block success
						style={styles.button}
						title="Se Connecter"
						color="#BF53A9"
						accessibilityLabel="Se Connecter"
						onPress={() => {
							if( email && password ){
								validate();
							}
							else{
								console.warn('Entrer email et mot de passe');
							}
						}}/>
						<View>
							<Text style={styles.error}>{erreur}</Text>
						</View>
				</View>
			</SafeAreaView>
		</View>
	)


}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#FCFCFC',
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
	error: {
		fontSize: 16,
		fontWeight: "bold",
		margin: 15,
		textAlign: "center",
		color: '#FF0000',
	},
	textInput: {
		backgroundColor: 'white',
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
		height: 45,
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