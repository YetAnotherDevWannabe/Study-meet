import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Text, View, StyleSheet, } from "react-native";


const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={styles.searchbar}
      placeholder="Recherche"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
    searchbar: {
		marginLeft: 40,
        marginRight: 40,
        height: 40,
        borderColor: "black",
		borderRadius: 15,
		borderWidth: 1,
        shadowColor: "#adadad",
	},
  });

export default MyComponent;