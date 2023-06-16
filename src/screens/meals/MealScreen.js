import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MealScreen = () => {

  const navigation = useNavigation();

  const onPressRecipe = () => {
    navigation.navigate('Recipe');
  }

  const onPressCart = () => {
    navigation.navigate('Cart');
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1, padding: 25 }}>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.roundedWhite} onPress={goBack}>
              <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'center', padding: 10 }}>
            <Text style={{ color: '#4A4A6A' }}>April 15, 2023</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.roundedWhite}>
              <AntDesign name="calendar" size={20} color="#4A4A6A" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ marginTop: 30, paddingStart: 10, fontSize: 24, fontWeight: 'bold' }}>Breakfast</Text>

        <View style={[{ marginTop: 15, flexDirection: 'row' }, styles.roundedWhite, styles.shadow]}>
          <View style={{ flex: 1 }}>
            <Text style={[{ textAlign: 'center' }, styles.boldText]}>502g</Text>
            <Text style={{ textAlign: 'center', color: '#4A4A6A' }}>calories</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[{ textAlign: 'center' }, styles.boldText]}>6.6g</Text>
            <Text style={{ textAlign: 'center', color: '#4A4A6A' }}>carbs</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[{ textAlign: 'center' }, styles.boldText]}>24.8g</Text>
            <Text style={{ textAlign: 'center', color: '#4A4A6A' }}>protein</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[{ textAlign: 'center' }, styles.boldText]}>41.7g</Text>
            <Text style={{ textAlign: 'center', color: '#4A4A6A' }}>fat</Text>
          </View>
        </View>

        <View style={[styles.shadow, styles.roundedWhite, { marginTop: 30, padding: 15, flexDirection: 'row' }]}>
          <View style={{ flex: 1 }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 50 }} />
          </View>
          <View style={{ flex: 2, paddingStart: 15, justifyContent: 'center' }}>
            <Text style={styles.boldText}>Hearty Dumpling</Text>
            <Text style={{ color: '#8E8EA9' }}>4 pieces</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity style={[styles.roundedWhite, { backgroundColor: '#8E8EA9' }]} onPress={onPressRecipe}>
              <AntDesign name="arrowright" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <Text style={{ textAlign: 'center', color: '#8E8EA9', fontWeight: 'bold', fontSize: 20 }} onPress={onPressCart}>Go to cart</Text>
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
    padding: 30
  }
});

export default MealScreen;
