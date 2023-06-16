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
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={styles.roundedWhite} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 60, paddingHorizontal: 30, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Your order has been placed. Please wait for 30 - 50 minutes as we pack your order</Text>
        
        <Image source={require('../../../assets/images/placeholder.jpg')} style={{ marginTop: 30, aspectRatio: 1, width: '75%', alignSelf: 'center' }} />

        <Text style={{ marginTop: 30, paddingHorizontal: 30, textAlign: 'center', color: '#44AF69', fontSize: 24, fontWeight: 'bold' }}>Did you know that?</Text>
        <Text style={{ marginTop: 15, paddingHorizontal: 30, textAlign: 'center', color: '#8E8EA9', fontSize: 16 }}>The production of animal-based foods tends to have higher greenhouse gas emissions (orange bars) than producing plant-based foods—and dairy and red meat (especially beef) stand out for their disproportionate impact.</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#50269D'
  },
  roundedWhite: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footer: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30
  }
});

export default OrderPlacedScreen;
