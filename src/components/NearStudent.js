import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const DisplayNearStudent = (props) => {
    return (
    <View style={{flex:1, marginEnd: 10, marginStart: 10}}>
        <TouchableOpacity style={styles.card}>
            <View style={styles.profile}>
                
                <Image
                    style={styles.img}
                    source={{uri:props.image}}
                />
               
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
	profile: {
        marginBottom: 10,
		alignItems: "center",
        width: 80,
        height: 100,
	},
    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
    }
});

export default DisplayNearStudent;