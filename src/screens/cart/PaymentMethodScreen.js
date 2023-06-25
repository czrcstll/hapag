import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { RadioButton } from 'react-native-paper';

const PaymentMethodScreen = () => {

  const navigation = useNavigation();

  const onPressOkay = () => {
    navigation.navigate('');
  }

  const goBack = () => {
    navigation.navigate('Cart');
  }

  const [checked, setChecked] = useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, padding: 25 }}>

        <View style={{ alignItems: 'flex-start' }}>
          <TouchableOpacity style={styles.roundedWhite} onPress={goBack}>
            <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Payment Method</Text>

        <RadioButton.Group value={checked}>
          <View style={[styles.shadow, styles.roundedWhite, { marginTop: 30, padding: 15, flexDirection: 'row' }]}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <RadioButton value="first" color="#50269D"/>
            </View>
            <View style={{ flex: 4, paddingStart: 15, justifyContent: 'center' }}>
              <Text style={styles.boldText}>Gcash</Text>
              <Text style={{ color: '#4A4A6A' }}>63-9****57751</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Entypo name="pencil" size={20} color="#50269D" />
            </View>
          </View>

          <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <RadioButton value="second" color="#50269D"/>
            </View>
            <View style={{ flex: 4, paddingStart: 15, justifyContent: 'center' }}>
              <Text style={styles.boldText}>Credit or debit card</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <AntDesign name="right" size={20} color="#50269D" />
            </View>
          </View>

          <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <RadioButton value="second" color="#50269D"/>
            </View>
            <View style={{ flex: 4, paddingStart: 15, justifyContent: 'center' }}>
              <Text style={styles.boldText}>Cash</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <AntDesign name="right" size={20} color="#50269D" />
            </View>
          </View>
        </RadioButton.Group>

      </ScrollView>

      <View style={styles.footer}>
        <View style={[{ alignItems: 'center' }, styles.footer]}>
          <CustomButton text="OK" onPress={onPressOkay} />
        </View>
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
    padding: 10
  }
});

export default PaymentMethodScreen;
