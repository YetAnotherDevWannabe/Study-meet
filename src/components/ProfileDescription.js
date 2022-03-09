import { Text, View, StyleSheet, Image } from "react-native";
import ChoixImage from "../components/ChoixImage";

export default function ProfileDescription ()
{
    return(
    <View style={{top: -50}}>
        <View style={styles.imgPro}>
            <ChoixImage>
                
            </ChoixImage>
           
                <Text style={styles.txtImg}>
                    Nom Prénom
                </Text>
            </View>
        <View>
            <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus rhoncus laoreet.
                Donec interdum risus quis magna scelerisque, eget tristique eros sagittis.
                Aliquam id elementum ligula. 
            </Text>
        </View>
        <View style={styles.rowTxt}>
            <Text>
                X Test
            </Text>

            <Text>
                X Test
            </Text>

            <Text>
               X Test
            </Text>
        </View>
    </View>
)}

const styles = StyleSheet.create({
	row: {
        marginTop: 10,
		flexDirection: "row",
    },
    desc: {
        textAlign: "center",
    },
    // img: {
    //     width: 120,
    //     height: 120,
    //     borderRadius: 10,
    // },
    imgPro: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtImg: {
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rowTxt: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});
