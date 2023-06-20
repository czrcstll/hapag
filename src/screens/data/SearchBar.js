import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
        <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
            <TouchableOpacity style={styles.iconButton} onPress={onFilter}>
        <Feather name="filter" size={24} color="black" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconButton: {
    paddingHorizontal: 8,
  },
});

export default SearchBar;