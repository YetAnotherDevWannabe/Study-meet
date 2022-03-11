import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ChoixImage() {
  const [image, setImage] = useState(null);

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        {image && <Image source={{ uri: image }} style={styles.img}/>}

          
          <View style={styles.lol}>
              <Text onPress={pickImage} style={{color: "#fff"}}>+</Text>
          </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    lol: {
        position: "absolute",
        backgroundColor: 'transparent',
        color: "#fff",
        right: 4,
        bottom: 2,
        fontSize: 10,
    },
});
