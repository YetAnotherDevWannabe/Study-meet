import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonStudent = (props) =>
{
	return (
		<TouchableOpacity style={styles.buttonBody}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonBody: {
		backgroundColor: '#972986',
		width: '90%',
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600',
	}
});

export { ButtonStudent };