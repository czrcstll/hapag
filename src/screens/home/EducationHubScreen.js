import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Title 1',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 2',
    image: require('../../../assets/images/placeholder.jpg'),
  },
];

const EducationHubScreen = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const navigation = useNavigation();

  const handleLearnMorePress = (id) => {
    setSelectedImageId(id);
  };

  const handleCloseModal = () => {
    setSelectedImageId(null);
  };

  const selectedImageData = data.find((item) => item.id === selectedImageId);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#F7F7F7', padding: 25 }}>

        <View style={{ alignItems: 'flex-start', paddingBottom: 10 }}>
          <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
        </View>

        <Text style={{ marginTop: 20, fontSize: 22, fontWeight: 'bold' }}>What do you want to learn today?</Text>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, height: 50, padding: 15, alignItems: 'center', marginTop: 15 }}>
          <Ionicons name="search" size={20} color="#C0C0CF" />
          <Text style={{ paddingStart: 5, color: '#8E8EA9' }}>Search</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
          {data.map((item, index) => (
            <View key={index} style={{ backgroundColor: '#F6A43E', borderRadius: 15, padding: 15, width: 200, height: 400, marginRight: 10 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image source={item.image} style={{ aspectRatio: 1, width: '100%', borderRadius: 70 }} />
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                <TouchableOpacity onPress={() => handleLearnMorePress(item.id)}>
                  <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#50269D' }}>Learn more</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <Modal visible={selectedImageId !== null} transparent={false}>
          <View style={styles.modalContainer}>
            <Image source={selectedImageData ? selectedImageData.image : null} style={styles.fullScreenImage} resizeMode="contain" />
            <TouchableOpacity style={[styles.backButton, {padding: 10, borderRadius: 15, backgroundColor: 'white'}]} onPress={handleCloseModal}>
                <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
            </TouchableOpacity>
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreenImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 25,
  }
});

export default EducationHubScreen;
