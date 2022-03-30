import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const NomPrenom = () => {
  const [text, setText] = useState('');
  return (
    <View style={{justifyContent: 'center',padding: 10}}>
      <TextInput
        style={{height: 30, textAlign: 'center', fontWeight: 'bold'}}
        placeholder="Votre nom et prénom"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default NomPrenom;