import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const CartScreen = () => {

  const navigation = useNavigation();

  const onPressCheckout = () => {
    navigation.navigate('CheckOut');
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={[styles.roundedWhite, { padding: 10 }]} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Cart</Text>

        <View style={[styles.shadow, styles.roundedWhite, { marginTop: 30, padding: 15, flexDirection: 'row' }]}>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 50 }} />
          </View>
          <View style={{ flex: 5, paddingStart: 15, justifyContent: 'center' }}>
            <Text style={styles.boldText}>Rice</Text>
            <Text style={{ color: '#8E8EA9' }}>50 grams</Text>
            <Text style={{ color: '#F6A43E', fontWeight: 'bold', fontSize: 18, marginTop: 5 }}>₱50</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={20} color="#50269D" />
            </TouchableOpacity>
            <Text style={{ color: '#3A2D78', marginHorizontal: 5, fontWeight: 'bold', fontSize: 20 }}>1</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={20} color="#50269D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#F6A43E', marginEnd: 20, fontWeight: 'bold', fontSize: 16 }}>Add Tip for Drivers </Text>
          <Text style={[{ textAlign: 'center', color: '#6F6F8E', fontWeight: 'bold' }, styles.roundedWhite]}>20 PHP</Text>
        </View>

        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#F6A43E', marginEnd: 20, fontWeight: 'bold', fontSize: 16 }}>Add Tip for Farmers</Text>
          <Text style={[{ textAlign: 'center', color: '#6F6F8E', fontWeight: 'bold' }, styles.roundedWhite]}>20 PHP</Text>
        </View>

        <View style={{ marginTop: 15, paddingHorizontal: 60, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={{ color: '#666687', fontSize: 16 }}>Sub Total</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#666687', fontSize: 16, fontWeight: 'bold' }}>90 PHP</Text>
          </View>
        </View>

        <View style={{ marginTop: 5, paddingHorizontal: 60, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={{ color: '#666687', fontSize: 16 }}>Delivery Fee</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#666687', fontSize: 16, fontWeight: 'bold' }}>39 PHP</Text>
          </View>
        </View>

        <View style={{ margin: 10, width: '75%', height: 2, backgroundColor: '#D9D9D9', alignSelf: 'center' }}></View>

        <View style={{ paddingHorizontal: 60, flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={{ color: '#50269D', fontSize: 18, fontWeight: 'bold' }}>Total</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#50269D', fontSize: 18, fontWeight: 'bold' }}>129 PHP</Text>
          </View>
        </View>

        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <AntDesign name="tagso" size={24} color="#F6A43E" />
          <Text style={{ marginStart: 5, color: '#F6A43E', marginEnd: 20, fontWeight: 'bold', fontSize: 16 }}>Apply a vouhcer</Text>
        </View>

        <View style={{ marginTop: 30, borderRadius: 15, backgroundColor: 'white' }}>
          <View style={{ padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={{ color: '#8E8EA9', fontWeight: 'bold' }}>Your delivery address</Text>
              <View style={{ flexDirection: 'row', marginTop: 3, alignItems: 'center' }}>
                <Ionicons name="location-outline" size={14} color="#8E8EA9" />
                <Text style={{ color: '#8E8EA9' }}> JMK Clinic, Pasig City</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <AntDesign name="right" size={20} color="#666687" />
            </View>
          </View>

          <View style={{ height: 2, backgroundColor: '#D9D9D9' }}></View>

          <View style={{ padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={{ color: '#8E8EA9', fontWeight: 'bold' }}>Payment Method</Text>
              <View style={{ flexDirection: 'row', marginTop: 3, alignItems: 'center' }}>
                <AntDesign name="wallet" size={14} color="#8E8EA9" />
                <Text style={{ color: '#8E8EA9' }}> Gcash</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <AntDesign name="right" size={20} color="#666687" />
            </View>
          </View>
        </View>

      </ScrollView>

      <View style={[{ alignItems: 'center' }, styles.footer]}>
        <CustomButton text="Proceed to Checkout" onPress={onPressCheckout} />
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

export default CartScreen;
