import React from 'react';
import { Image, Text, View, TouchableHighlight, StyleSheet, } from "react-native";


const DisplayCardQuestion = (props) => {

	var [ isPress, setIsPress ] = React.useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '',
	style: isPress ? styles.cardPress : styles.card,
	// style: isPress ? styles.paragraphPress : styles.paragraph,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),
  };

  var touchText = {
    activeOpacity: 1,
    underlayColor: '',
	// style: isPress ? styles.cardPress : styles.card,
	style: isPress ? styles.paragraphPress : styles.paragraph,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),
  };


    return (
    <View style={{flex:1,}}>
        <View style={styles.cards}>
			
            <TouchableHighlight {...touchProps}>
			
                <View style={styles.bloc}>
				
                    <View style={styles.left}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/question.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text {...touchText} >{props.desc}</Text>
                    </View>
					<Text style={styles.btnZoom}>V</Text>
                </View>
            </TouchableHighlight>
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
		width: "72%",
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

	paragraphPress: {
		color: "#525252",
		fontSize: 22,
		fontStyle: 'italic',
		
	},

	cardPress: {
		padding: 5,
		margin: 5,
		borderColor: "black",
		borderRadius: 15,
		borderWidth: 1,
		width: 300,
		height: 150,
        shadowColor: "#adadad",
        shadowRadius: 2,
		shadowOpacity: 1,
        shadowOffset: {
            width: 5,
            height: 5,
	  },
	},

});

export default DisplayCardQuestion;