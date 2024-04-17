import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Products..."
        multiline={false}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 40,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    fontSize: 16,
    color: '#333333',
  },
});

export default SearchBar;
