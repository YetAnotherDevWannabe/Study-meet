import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const DisplayGoodStuff = () => {
    return (
    <View style={{flex:1}}>
        <TouchableOpacity style={styles.card}>
            <View style={styles.meal}>
                <Image
                    style={styles.img}
                    source={require('../../assets/Meal.jpg')}
                />
            </View>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
	meal: {
        marginBottom: 10,
		alignItems: "center",
    	width: "100%",
	},
    img: {
        width: 100,
        height: 100,
        borderRadius: "10px"
    }
});

export default DisplayGoodStuff;