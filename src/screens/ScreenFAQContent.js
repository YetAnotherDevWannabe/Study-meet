import React, { useState, useEffect, useCallback } from "react";
import { Image, Text, View, TouchableHighlight, StyleSheet, ScrollView } from "react-native";
import { Container, Card, UserInfo, UserImgWrapper, UserImg, UserInfoText, UserName, PostTime, TextSection,	MessageText } from "../styles/MessageStyle";
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Question from "../components/Question";
import Reponse from "../components/Reponse";
import { hsc, wsc } from "../G";

import img from './../../assets/ask.jpg'
const imgTest = Image.resolveAssetSource(img).uri

import img2 from './../../assets/TestingGirl.jpg'
const img2Test = Image.resolveAssetSource(img).uri

const Questions = [
    {
        id: 1,
        userName: "Thomas",
        userImg: require("../../assets/ask.jpg"),
        messageTime: "2d ago",
        questionText: 
            "Bonjour tout le monde, \nÉtant nouveau sur cette application je me demandais. Est-ce qu’il est possible de changer le thème de notre application ? Je suis comme allergique a ce thème Lumineux.\n\nMerci d’avance pour vos réponses. "
    }
];

export default function ScreenFAQ({route, navigation})
{
	console.log("Route", route)

	return (
		<Container>
			<ScrollView>
				<Card>		
					<Question
						userImg={img}
						userName="Thomas"
						messageTime="2d ago"
						questionText="Bonjour tout le monde, Étant nouveau sur cette application je me demandais. Est-ce qu’il est possible de changer le thème de notre application ? Je suis comme allergique a ce thème Lumineux. Merci d’avance pour vos réponses."
					/>
				</Card>
				<Card>		
					<Reponse
						userImg={img2}
						userName="Léa"
						messageTime="2d ago"
						questionText="Salut Thomas! Je t’avoue que je n’ai aucune idée de comment faire ça étant donné que je ne me suis jamais penché sur la question mais tu devrais jeté un coup d’oeil cotès paramètre il me semble avoir déjà vu un bouton Thèmes."
					/>
				</Card>
				<Card>		
					<Reponse
						userImg={img}
						userName="Thomas"
						messageTime="3h ago"
						questionText="Merci Léa, c’est ça."
					/>
				</Card>
			</ScrollView>
		</Container>
		
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: wsc,
		height: hsc,
	},
	category: {
		margin: 15,
		fontWeight: "bold",
		fontSize: 18,
		color: "black",
	},
});

