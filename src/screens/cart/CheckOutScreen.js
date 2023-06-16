import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const CheckOutScreen = () => {

  const navigation = useNavigation();

  const onPressFinished = () => {
    navigation.navigate('OrderPlaced');
  }

  const goBack = () => {
    navigation.navigate('Cart');;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={[styles.roundedWhite, { padding: 10 }]} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Checkout</Text>
        <Text style={{ marginTop: 15, paddingHorizontal: 30, textAlign: 'center', color: '#8E8EA9', fontSize: 16 }}>We've paired you to the nearest and available marketplace. Select your preferred place to checkout.</Text>

        <View style={{ marginTop: 30, flexDirection: 'row', backgroundColor: '#50269D', borderRadius: 20, padding: 20 }}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Kadiwa Pop-up Store</Text>
            <Text style={{ color: 'white' }}>4 km from you</Text>
            <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 70 }} />
          </View>
        </View>

        <View style={{ marginTop: 15, flexDirection: 'row', backgroundColor: '#44AF69', borderRadius: 20, padding: 20 }}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Farmer's Market</Text>
            <Text style={{ color: 'white' }}>5.2 km from you</Text>
            <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 70 }} />
          </View>
        </View>

      </ScrollView>

      <View style={[{ alignItems: 'center' }, styles.footer]}>
        <CustomButton text="Finished" onPress={onPressFinished} />
      </View>
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
    paddingHorizontal: 30,
    paddingVertical: 5,
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

export default CheckOutScreen;
