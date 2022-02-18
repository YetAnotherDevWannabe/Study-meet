import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const DisplayNearStudent = () => {
    return (
    <View style={{flex:1}}>
        <TouchableOpacity style={styles.card}>
            <View style={styles.profile}>
                <Image
                    style={styles.img}
                    source={require('../../assets/TestingGirl.jpg')}
                />
                <Text>
                    Jena
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
	},
    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
    }
});

export default DisplayNearStudent;