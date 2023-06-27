import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const discoverData = [
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

const allData = [
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

const popularData = [
  {
    id: 1,
    title: 'Title 3',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 4',
    image: require('../../../assets/images/placeholder.jpg'),
  },
];

const topData = [
  {
    id: 1,
    title: 'Title 5',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 6',
    image: require('../../../assets/images/placeholder.jpg'),
  },
];

const educHubData = [
  {
    id: 1,
    title: 'Title 5',
    image: require('../../../assets/images/placeholder.jpg'),
  },
  {
    id: 2,
    title: 'Title 6',
    image: require('../../../assets/images/placeholder.jpg'),
  },
];

const HomeScreen = () => {

  const navigation = useNavigation();

  const onPressMeal = () => {
    navigation.navigate('Meal');
  }

  const [selectedText, setSelectedText] = useState('Text 1');

  const handleTextPress = (text) => {
    setSelectedText(text);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#F7F7F7', padding: 25 }}>

        <View style={{ alignItems: 'flex-start', paddingBottom: 10 }}>
          <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
        </View>

        <Text style={{ marginTop: 20, fontSize: 22, fontWeight: 'bold' }}>Plan your meal today</Text>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, height: 50, padding: 15, alignItems: 'center', marginTop: 15 }}>
          <Ionicons name="search" size={20} color="#C0C0CF" />
          <Text style={{ paddingStart: 5, color: '#8E8EA9' }}>Search</Text>
        </View>

        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#4A4A6A' }}>Discover</Text>
        
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
          {discoverData.map((item, index) => (
            <View style={{ flexDirection: 'row', backgroundColor: '#50269D', borderRadius: 15, padding: 15, width: 300, height: 125, marginEnd: 15 }}>
              <View style={{ flex: 2, justifyContent: 'center', marginEnd: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={item.image} style={{ height: '100%', aspectRatio: 1, borderRadius: 70 }} />
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => handleTextPress('Text 1')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 1' ? '#44AF69' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 1' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>All Dishes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextPress('Text 2')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 2' ? '#44AF69' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 2' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>Most Popular</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextPress('Text 3')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 3' ? '#44AF69' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 3' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>Top Rated</Text>
            </View>
          </TouchableOpacity>
        </View>

        {selectedText === 'Text 1' ? (
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
            {allData.map((item, index) => (
              <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 15, width: 150, height: 250, marginEnd: 15 }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Image source={item.image} style={{ height: 120, aspectRatio: 1, borderRadius: 70 }} />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4A4A6A', textAlign: 'center' }}>{item.title}</Text>
                  <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold', color: '#44AF69', textAlign: 'center' }}>See More</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : selectedText === 'Text 2' ? (
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
            {popularData.map((item, index) => (
              <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 15, width: 150, height: 250, marginEnd: 15 }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Image source={item.image} style={{ height: 120, aspectRatio: 1, borderRadius: 70 }} />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4A4A6A', textAlign: 'center' }}>{item.title}</Text>
                  <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold', color: '#44AF69', textAlign: 'center' }}>See More</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
            {topData.map((item, index) => (
              <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 15, width: 150, height: 250, marginEnd: 15 }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Image source={item.image} style={{ height: 120, aspectRatio: 1, borderRadius: 70 }} />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4A4A6A', textAlign: 'center' }}>{item.title}</Text>
                  <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold', color: '#44AF69', textAlign: 'center' }}>See More</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        <Text style={{ marginTop: 30, fontSize: 16, fontWeight: 'bold', color: '#4A4A6A' }}>Educational Hub</Text>

        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 15 }}>
          {discoverData.map((item, index) => (
            <View style={{ flexDirection: 'row', backgroundColor: '#50269D', borderRadius: 15, padding: 15, width: 300, height: 125, marginEnd: 15 }}>
              <View style={{ flex: 2, justifyContent: 'center', marginEnd: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={item.image} style={{ height: '100%', aspectRatio: 1, borderRadius: 70 }} />
              </View>
            </View>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
