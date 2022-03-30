import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';

const avatarDefault = Asset.fromModule(require('../../assets/profileDefault.png')).uri;
export default function ChoixImage() {
  const [image, setImage] = useState(avatarDefault);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.propsAvatar}>

        {image && <Image source={{ uri: image }} style={styles.img}/>}

          <View style={styles.lol}>
              <Text onPress={pickImage} style={{color: "#fff"}}>+</Text>
          </View>

        <View style={styles.btnAdd}>
            <Text onPress={pickImage} style={styles.btnInput}  >+</Text>
        </View>
    </View>

  )}

const styles = StyleSheet.create({

  propsAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    btnAdd: {
        position: "absolute",
        bottom: 2,
        right:2,
        fontWeight: "bold",
    },
    btnInput: {
      color: "white",
      fontSize: 15,
      backgroundColor: "#5593CF",
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
      borderWidth: 1,
      textAlign: "center",
    },
});
