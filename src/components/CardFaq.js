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
	},
    card: {
		padding: 5,
		margin: 5,
		borderColor: "black",
		borderRadius: 15,
		borderWidth: 1,
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
		flexDirection: "row",
	},
	left: {
		width: "25%",
		alignItems: "center",
	},
	right: {
		width: "75%",
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
		fontSize: 16,
	},
	paragraph: {
		color: "#525252",
		fontSize: 12,
		fontStyle: 'italic',
	},
});

export default DisplayCardQuestion;