import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../assets/Logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 120,
      width: 120,
      resizeMode: 'stretch',
    },
  });

export default DisplayAnImageWithStyle;