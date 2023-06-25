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
      <ScrollView style={{ padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={{ padding: 10, borderRadius: 15, backgroundColor: 'white' }} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Checkout</Text>
        <Text style={{ marginTop: 15, paddingHorizontal: 30, textAlign: 'center', color: '#4A4A6A' }}>We've paired you to the nearest and available marketplace. Select your preferred place to checkout.</Text>

        <View style={[{ marginTop: 30, flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, padding: 15 }, styles.shadow]}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#50269D', fontSize: 16 }}>Kadiwa Pop-up Store</Text>
            <Text style={{ color: '#4A4A6A' }}>4 km from you</Text>
            <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 70 }} />
          </View>
        </View>

        <View style={[{ marginTop: 15, flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, padding: 15 }, styles.shadow]}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#50269D', fontSize: 16 }}>Farmer's Market</Text>
            <Text style={{ color: '#4A4A6A' }}>4 km from you</Text>
            <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', color: '#F6A43E' }}>Select</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 70 }} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
});

export default CheckOutScreen;
