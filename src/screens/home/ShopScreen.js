import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Title 1',
    price: '10 PHP',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 2',
    price: '10 PHP',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 2',
    price: '10 PHP',
    image: require('../../../assets/images/placeholder.jpg'),
  },
];

const ShopScreen = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const navigation = useNavigation();

  const handleLearnMorePress = (id) => {
    setSelectedImageId(id);
  };

  const selectedImageData = data.find((item) => item.id === selectedImageId);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#F7F7F7', padding: 25 }}>

        <View style={{ alignItems: 'flex-start', paddingBottom: 10 }}>
          <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
        </View>

        <Text style={{ marginTop: 20, fontSize: 22, fontWeight: 'bold' }}>What are you looking for?</Text>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, height: 50, padding: 15, alignItems: 'center', marginTop: 15 }}>
          <Ionicons name="search" size={20} color="#C0C0CF" />
          <Text style={{ paddingStart: 5, color: '#8E8EA9' }}>Search</Text>
        </View>

        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#4A4A6A' }}>Daily discover</Text>

        <View style={{ marginTop: 15, flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.map((item, index) => (
            <View key={index} style={[{ backgroundColor: 'white', borderRadius: 15, padding: 15, width: '46%', height: 200, margin: '2%' }, styles.shadow]}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image source={item.image} style={{ aspectRatio: 1, height: '100%', borderRadius: 15 }} />
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={{ color: '#4A4A6A' }}>{item.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#50269D' }}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
});

export default ShopScreen;
