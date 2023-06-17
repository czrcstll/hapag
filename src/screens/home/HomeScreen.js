import React from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import SearchBar from '../data/SearchBar';
import FoodCategoryCarousel from '../data/FoodCategoryCarousel';
import CustomButton from '../../components/CustomButton/CustomButton';
import { COLORS } from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearch = (searchText) => {
    // Perform search logic with the searchText
    console.log('Performing search with:', searchText);
  };

  const goToShops = () => {
    navigation.navigate('Shops');
  }

  return (
    <SafeAreaView>
      <ScrollView >
        <View>
              <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
              </View>
              <Text  style = {{color: '#000', fontSize: 24}}>Plan your meal today</Text>
              <SearchBar onSearch={handleSearch} />
       </View>
       <View style = {{backgroundColor: COLORS.violet, margin: 20, padding:20, borderRadius: 15}}>
        <Text style = {{color: '#ffff', fontSize: 18}}>Explore different market choices</Text>
        <CustomButton text="Shops" onPress={goToShops} type="SECONDARY" />
       </View>
       <FoodCategoryCarousel />
      </ScrollView>
    </SafeAreaView>
  )
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
  button: {
    marginLeft: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default HomeScreen