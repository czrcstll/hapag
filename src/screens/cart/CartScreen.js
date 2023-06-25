import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const CartScreen = () => {

  const navigation = useNavigation();

  const onPressCheckout = () => {
    navigation.navigate('CheckOut');
  }

  const onPressAddress = () => {
    navigation.navigate('Address');
  }

  const onPressPayment = () => {
    navigation.navigate('PaymentMethod');
  }

  const goBack = () => {
    navigation.navigate('Meal');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={[styles.roundedWhite, { padding: 10 }]} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 22, fontWeight: "bold" }}>Cart</Text>

        <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 50 }} />
          </View>
          <View style={{ flex: 2, paddingStart: 15, justifyContent: 'center' }}>
            <Text style={styles.boldText}>Rice</Text>
            <Text style={{ color: '#4A4A6A' }}>50 grams</Text>
            <Text style={{ color: '#F6A43E', fontWeight: "bold", fontSize: 18, marginTop: 5 }}>50 PHP</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={18} color="#50269D" />
            </TouchableOpacity>
            <Text style={{ color: '#3A2D78', marginHorizontal: 5, fontWeight: "bold", fontSize: 18 }}>1</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={18} color="#50269D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{ marginTop: 15, backgroundColor: 'white', borderRadius: 15 }, styles.shadow]}>
          <View style={{ padding: 15, backgroundColor: '#F6A43E', borderRadius: 15 }}>
            <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Payment Details</Text>
          </View>
          <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: '', fontSize: 14 }}>Add tip for drivers</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TextInput style={{ backgroundColor: '#F7F7F7', width: 80, color: '#4A4A6A', padding: 2, textAlign: 'center', borderRadius: 15 }} placeholder='0 PHP'></TextInput>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: '', fontSize: 14 }}>Add tip for farmers</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TextInput style={{ backgroundColor: '#F7F7F7', width: 80, color: '#4A4A6A', padding: 2, textAlign: 'center', borderRadius: 15 }} placeholder='0 PHP'></TextInput>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: '', fontSize: 14 }}>Delivery fee</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: '', fontSize: 14}}>39 PHP</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: "bold", fontSize: 14 }}>Total payment</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{ color: '#4A4A6A', fontWeight: "bold", fontSize: 14}}>39 PHP</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[{ marginTop: 15, borderRadius: 15, backgroundColor: 'white' }, styles.shadow]}>
          <View style={{ padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#4A4A6A', fontWeight: "bold", marginStart: 5 }}>Apply a voucher</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <AntDesign name="right" size={20} color="#D9D9D9" onPress={onPressAddress}/>
            </View>
          </View>
        </View>

        <View style={[{ marginTop: 15, borderRadius: 15, backgroundColor: 'white' }, styles.shadow]}>
          <View style={{ padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={{ color: '#4A4A6A', fontWeight: "bold" }}>Your delivery address</Text>
              <View style={{ flexDirection: 'row', marginTop: 3, alignItems: 'center' }}>
                <Ionicons name="location-outline" size={14} color="#4A4A6A" />
                <Text style={{ color: '#4A4A6A' }}> JMK Clinic, Pasig City</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <AntDesign name="right" size={20} color="#D9D9D9" onPress={onPressAddress}/>
            </View>
          </View>

          <View style={{ height: 2, backgroundColor: '#D9D9D9' }}></View>

          <View style={{ padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={{ color: '#4A4A6A', fontWeight: "bold" }}>Payment method</Text>
              <View style={{ flexDirection: 'row', marginTop: 3, alignItems: 'center' }}>
                <AntDesign name="wallet" size={14} color="#4A4A6A" />
                <Text style={{ color: '#4A4A6A' }}> Gcash</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <AntDesign name="right" size={20} color="#D9D9D9" onPress={onPressPayment}/>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <CustomButton text="Proceed to checkout" onPress={onPressCheckout} />
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
  boldText: {
    fontWeight: "bold",
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
  }
});

export default CartScreen;
