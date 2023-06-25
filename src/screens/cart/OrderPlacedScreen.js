import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const OrderPlacedScreen = () => {

  const navigation = useNavigation();

  const onPressFinished = () => {
    navigation.navigate('');
  }

  const goBack = () => {
    navigation.navigate('MealPlan');
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#F7F7F7' }}>
      <ScrollView style={{ padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={{ padding: 10, borderRadius: 15, backgroundColor: 'white' }} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 40, paddingHorizontal: 30, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Your order has been placed. Please wait for 30 - 50 minutes as we pack your order</Text>

        <Image source={require('../../../assets/images/placeholder.jpg')} style={{ marginTop: 30, aspectRatio: 1, width: '75%', alignSelf: 'center' }} />

        <Text style={{ marginTop: 30, paddingHorizontal: 30, textAlign: 'center', color: '#44AF69', fontSize: 22, fontWeight: 'bold' }}>Did you know that?</Text>
        <Text style={{ marginTop: 15, paddingHorizontal: 30, textAlign: 'center', color: '#4A4A6A' }}>The production of animal-based foods tends to have higher greenhouse gas emissions (orange bars) than producing plant-based foods—and dairy and red meat (especially beef) stand out for their disproportionate impact.</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderPlacedScreen;
