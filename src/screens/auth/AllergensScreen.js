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

const AllergensScreen = ({navigation, route}) => {
  const [ allergen, setAllergen ] = useState('');

  const goToNextScreen = () => {
    console.warn('You chose ' + allergen);
    navigation.navigate('HealthPlan', {
      username: route.params.username,
      email: route.params.email,
      phone: route.params.phone,
      password: route.params.password,
      verification: route.params.verification,
      age: route.params.age,
      sex: route.params.sex,
      birthday: route.params.birthday,
      religion: route.params.religion,
      height: route.params.height,
      weight: route.params.weight,
      physical: route.params.physical,
      comorbidity: route.params.comorbidity,
      allergen: allergen
    });
  }

  const goBack = () => {
    navigation.goBack();
  }

  const temp = (event) => {
    if(allergen == ''){
      if(event == 1){
        setAllergen("Egg");
      } else if (event == 2){
        setAllergen("Nuts");
      } else if (event == 3){
        setAllergen("Gluten");
      } else if (event == 4){
        setAllergen("Milk");
      } else if (event == 5){
        setAllergen("Soy");
      } else {
        setAllergen("Shellfish");
      }
    }else{
      if(event == 1){
        setAllergen(allergen + ", Egg");
      } else if (event == 2){
        setAllergen(allergen + ", Nuts");
      } else if (event == 3){
        setAllergen(allergen + ", Gluten");
      } else if (event == 4){
        setAllergen(allergen + ", Milk");
      } else if (event == 5){
        setAllergen(allergen + ", Soy");
      } else {
        setAllergen(allergen + ", Shellfish");
      }
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Do you have any food allergen?</Text>
        <Text style={styles.subHeadingText}>Let us tailor your food choices according to your conditions</Text>

        <Text style={styles.subHeadingText}>Select all that applies</Text>
        <CustomButton text="Egg" onPress={() => temp(1)} type="TERTIARY" />
        <CustomButton text="Nuts" onPress={() => temp(2)} type="TERTIARY" />
        <CustomButton text="Gluten" onPress={() => temp(3)} type="TERTIARY" />
        <CustomButton text="Milk" onPress={() => temp(4)} type="TERTIARY" />
        <CustomButton text="Soy" onPress={() => temp(5)} type="TERTIARY" />
        <CustomButton text="Shellfish" onPress={() => temp(6)} type="TERTIARY" />

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
