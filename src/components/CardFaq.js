import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const DisplayCardQuestion = () => {
    return (
    <View style={{flex:1,}}>
        <View style={styles.cards}>
            <TouchableOpacity style={styles.card}>
                <View style={styles.bloc}>
                    <View style={styles.left}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/question.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Titre 1</Text>
                        <Text style={styles.paragraph}>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
	cards: {
		alignItems: "center",
    	height: "100%",
	},
    card: {
		padding: 5,
		margin: 5,
		borderColor: "black",
		borderRadius: 15,
		borderWidth: "1px",
		width: 300,
        shadowColor: "#adadad",
        shadowRadius: 2,
        shadowOpacity: 1,
        shadowOffset: {
            width: 5,
            height: 5,
          },
    },
	bloc: {
		display: "flex",
		flexDirection: "initial",
	},
	left: {
		width: "25%",
		alignItems: "center",
    	height: "100%",
	},
	right: {
		width: "75%",
    	height: "100%",
	},
	img: {
		backgroundColor: "white",
		borderRadius: 50,
		height: 50,
		width: 50,
	},
	title: {
		color: "#972986",
		fontWeight: "600",
		fontSize: "16px",
	},
	paragraph: {
		color: "#525252",
		fontSize: "12px",
		fontStyle: 'italic',
	},
});

export default DisplayCardQuestion;