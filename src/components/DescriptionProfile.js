import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Description = () => {
  const [text, setText] = useState('');
  return (
    <View style={{justifyContent: 'center',padding: 10}}>
      <TextInput
        style={{height: 30, textAlign: 'center'}}
        placeholder="Ajouter une description"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        maxLength={70}
      />
    </View>
  );
}

export default Description;