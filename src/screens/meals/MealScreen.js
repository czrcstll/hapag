import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MealScreen = () => {

  const navigation = useNavigation();

  const onPressView = () => {
    navigation.navigate('Recipe');
  }

  const onPressSwapOne = () => {
    navigation.navigate('Recipe');
  }

  const onPressSwapAll = () => {
    navigation.navigate('Recipe');
  }

  const onPressAdd = () => {
    navigation.navigate('Recipe');
  }

  const onPressCart = () => {
    navigation.navigate('Cart');
  }

  const goBack = () => {
    navigation.navigate('MealPlan');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 25 }}>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.roundedWhite} onPress={goBack}>
              <AntDesign name="arrowleft" size={20} color="#4A4A6A" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#4A4A6A', fontWeight: 'bold' }}>April 15, 2023</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.roundedWhite}>
              <AntDesign name="calendar" size={20} color="#4A4A6A" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', paddingStart: 10}}>Breakfast</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 15 }} onPress={onPressSwapAll}>
              <MaterialCommunityIcons name="arrow-u-right-top" size={20} color="#F6A43E" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{ marginTop: 15, flexDirection: 'row' }, styles.roundedWhite, styles.shadow]}>
          <View style={{ flex: 1 }}>
            <Text style={[{ textAlign: 'center' }, styles.boldText]}>502</Text>
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

        <View style={[styles.shadow, styles.roundedWhite, { marginTop: 15, padding: 15, flexDirection: 'row' }]}>
          <View style={{ flex: 1 }}>
            <Image source={require('../../../assets/images/placeholder.jpg')} style={{ aspectRatio: 1, width: '100%', borderRadius: 50 }} />
          </View>
          <View style={{ flex: 2, paddingStart: 15, justifyContent: 'center' }}>
            <Text style={styles.boldText}>Hearty Dumpling</Text>
            <Text style={{ color: '#4A4A6A' }}>4 pieces</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#F6A43E', padding: 5, borderRadius: 15, width: '100%' }} onPress={onPressView}>
              <Text style={{ textAlign: 'center', color: 'white' }}>View</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingTop: 5, width: '100%' }}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#50269D', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 15, marginEnd: 2 }} onPress={onPressSwapOne}>
                <MaterialCommunityIcons name="arrow-u-right-top" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#50269D', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 15, marginStart: 2 }} onPress={onPressAdd}>
                <MaterialCommunityIcons name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30, width: '100%' }}>
        <TouchableOpacity style={{ backgroundColor: '#8E8EA9', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 15, marginStart: 2 }} onPress={onPressCart}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: '', fontSize: 18 }}>Go to cart</Text>
        </TouchableOpacity>
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
  }
});

export default MealScreen;
