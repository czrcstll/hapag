import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AllergensScreen = () => {

  const navigation = useNavigation();
  const goToNextScreen = () => {
    // navigation.navigate('Allergens');
  }

  const goBack = () => {
    navigation.goBack();
  }

  const temp = () => {
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Do you have any food allergen?</Text>
        <Text style={styles.subHeadingText}>Let us tailor your food choices according to your conditions</Text>

        <Text style={styles.subHeadingText}>Select all that applies</Text>
        <CustomButton text="Egg" onPress={temp} type="TERTIARY" />
        <CustomButton text="Nuts" onPress={temp} type="TERTIARY" />
        <CustomButton text="Gluten" onPress={temp} type="TERTIARY" />
        <CustomButton text="Milk" onPress={temp} type="TERTIARY" />
        <CustomButton text="Soy" onPress={temp} type="TERTIARY" />
        <CustomButton text="Shellfish" onPress={temp} type="TERTIARY" />

        <View style={styles.buttonWrapper}>
          <CustomButton text="Back" onPress={goBack} type="SECONDARY" />
          <CustomButton text="Next" onPress={goToNextScreen} />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 30,
    marginTop: 60
  },

  headerText: {
    fontSize: 24,
    color: '#44AF69',
    marginBottom: 12,
    textAlign: 'center'
  },

  subHeadingText: {
    fontSize: 18,
    color: '#8E8EA9',
    textAlign: 'center',
    marginBottom: 30,
  },

  textButton: {
    fontSize: 16,
    color: '#8E8EA9',
    textAlign: 'center',
    padding: 20
  },

  buttonWrapper: {
    marginTop: 5
  }

});

export default AllergensScreen;
