import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const ComorbiditiesScreen = ({navigation, route}) => {
  const [ comorbidity, setComorbidity ] = useState('');

  const goToNextScreen = () => {
    console.warn('You chose ' + comorbidity);
    navigation.navigate('Allergens', {
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
      comorbidity: comorbidity
    });
  }

  const goBack = () => {
    navigation.navigate('PhysicalFactor');
  }

  const temp = (event) => {
    if(comorbidity == ''){
      if(event == 1){
        setComorbidity("Cancer");
      } else if (event == 2){
        setComorbidity("Chronic Lung Disease");
      } else if (event == 3){
        setComorbidity("Hypertension");
      } else if (event == 4){
          setComorbidity("Heart Disease");
      } else if (event == 5){
          setComorbidity("Chronic Kidney Disease");
      } else {
        setComorbidity("Diabetes");
      }
    }else{
      if(event == 1){
        setComorbidity(comorbidity + ", Cancer");
      } else if (event == 2){
        setComorbidity(comorbidity + ", Chronic Lung Disease");
      } else if (event == 3){
        setComorbidity(comorbidity + ", Hypertension");
      } else if (event == 4){
          setComorbidity(comorbidity + ", Heart Disease");
      } else if (event == 5){
          setComorbidity(comorbidity + ", Chronic Kidney Disease");
      } else {
        setComorbidity(comorbidity + ", Diabetes");
      }
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Do you have any existing comorbidity?</Text>
        <Text style={styles.subHeadingText}>Let us tailor your food choices according to your conditions</Text>

        <Text style={styles.subHeadingText}>Select all that applies</Text>
        <CustomButton text="Cancer" onPress={() => temp(1)} type="TERTIARY" />
        <CustomButton text="Chronic Lung Disease" onPress={() => temp(2)} type="TERTIARY" />
        <CustomButton text="Hypertension" onPress={() => temp(3)} type="TERTIARY" />
        <CustomButton text="Heart Disease" onPress={() => temp(4)} type="TERTIARY" />
        <CustomButton text="Chronic Kidney Disease" onPress={() => temp(5)} type="TERTIARY" />
        <CustomButton text="Diabetes" onPress={() => temp(6)} type="TERTIARY" />


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

export default ComorbiditiesScreen;
