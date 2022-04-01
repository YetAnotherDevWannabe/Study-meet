import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Description = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex:1, padding: 10, }}>
      <TextInput
        style={{height: 60, flex:1, justifyContent:'center', padding: 10,}}
        placeholder="Ajouter une description"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default Description;