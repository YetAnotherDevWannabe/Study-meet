import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";


const DisplayCardMessage = (props) => {

    return (
    <View>
        <View style={styles.cards}>
            <TouchableOpacity style={styles.card}>
                <View style={styles.bloc}>
                    <View style={styles.left}>
                        <Image
                            style={styles.img}
                            source = { require('../../assets/male.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>{props.user}</Text>
                        <Text style={styles.paragraph}>{props.lastMsg}</Text>
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
		width: 350,
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
		width: "30%",
		alignItems: "center",
	},
	right: {
		width: "70%",
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

export default DisplayCardMessage;