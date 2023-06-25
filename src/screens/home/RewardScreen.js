import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const voucherData = [
  {
    id: 1,
    title: '10% off',
    subtitle: 'Min. spend 100 PHP',
  },
  {
    id: 2,
    title: '50 PHP off',
    subtitle: 'Min. spend 0 PHP',
  },
];

const cashbackData = [
  {
    id: 1,
    title: '15% Cashback',
    subtitle: 'Min. spend 100 PHP Capped at 100 PHP',
  },
];

const freeShippingData = [
  {
    id: 1,
    title: '50 PHP off',
    subtitle: 'Min. spend 100 PHP',
  },
  {
    id: 2,
    title: '50 PHP off',
    subtitle: 'Min. spend 100 PHP',
  },
  {
    id: 2,
    title: '50 PHP off',
    subtitle: 'Min. spend 0 PHP',
  },
];

const RewardScreen = () => {
  const navigation = useNavigation();
  const [selectedText, setSelectedText] = useState('Text 1');

  const onPressMeal = () => {
    navigation.navigate('Meal');
  }

  const handleTextPress = (text) => {
    setSelectedText(text);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#F7F7F7', padding: 25 }}>

        <View style={{ alignItems: 'flex-start', paddingBottom: 10 }}>
          <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
        </View>

        <Text style={{ marginTop: 20, fontSize: 22, fontWeight: 'bold' }}>Earn rewards by making healthy choices</Text>

        <View style={{ marginTop: 15, flexDirection: 'row', backgroundColor: '#44AF69', borderRadius: 15 }}>
          <View style={{ flex: 2, justifyContent: 'center', marginEnd: 5, padding: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Your points</Text>
            <Text style={{ marginTop: 10, fontSize: 22, fontWeight: 'bold', color: 'white' }}>1500</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/gift.png')} style={{ height: '100%' }} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => handleTextPress('Text 1')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 1' ? '#50269D' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 1' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>Voucher</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextPress('Text 2')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 2' ? '#50269D' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 2' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>Cashback</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextPress('Text 3')}>
            <View style={{ flex: 1, padding: 15, borderRadius: 15, backgroundColor: selectedText === 'Text 3' ? '#50269D' : 'transparent' }}>
              <Text style={{ textAlign: 'center', color: selectedText === 'Text 3' ? 'white' : '#8E8EA9', fontWeight: 'bold' }}>Free Shipping</Text>
            </View>
          </TouchableOpacity>
        </View>

        {selectedText === 'Text 1' ? (
          <View>
            {voucherData.map((item, index) => (
              <View key={index} style={[styles.shadow, { marginTop: 15, padding: 15, borderRadius: 15, backgroundColor: 'white', flexDirection: 'row' }]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="cash" size={50} color="#F6A43E" />
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={{ color: '#4A4A6A', fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: '#4A4A6A' }}>{item.subtitle}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ backgroundColor: '#F6A43E', padding: 5, borderRadius: 15, width: '100%' }} onPress={onPressMeal}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Claim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : selectedText === 'Text 2' ? (
          <View>
            {cashbackData.map((item, index) => (
              <View key={index} style={[styles.shadow, { marginTop: 15, padding: 15, borderRadius: 15, backgroundColor: 'white', flexDirection: 'row' }]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="cash-refund" size={50} color="#F6A43E" />
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={{ color: '#4A4A6A', fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: '#4A4A6A' }}>{item.subtitle}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ backgroundColor: '#F6A43E', padding: 5, borderRadius: 15, width: '100%' }} onPress={onPressMeal}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Claim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View>
            {freeShippingData.map((item, index) => (
              <View key={index} style={[styles.shadow, { marginTop: 15, padding: 15, borderRadius: 15, backgroundColor: 'white', flexDirection: 'row' }]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="truck-delivery-outline" size={50} color="#F6A43E" />
                </View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={{ color: '#4A4A6A', fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: '#4A4A6A' }}>{item.subtitle}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ backgroundColor: '#F6A43E', padding: 5, borderRadius: 15, width: '100%' }} onPress={onPressMeal}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Claim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

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

export default RewardScreen;
