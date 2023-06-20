import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const PhysicalFactorScreen = ({navigation, route}) => {

  const [ physical, setPhysical ] = useState('');

  const goToNextScreen = () => {
    console.warn('You chose ' + physical);
    navigation.navigate('Comorbidities', {
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
      physical: physical
    });
  }

  const goBack = () => {
    navigation.navigate('HealthDetails');
  }

  const temp = (event) => {
    if(event == 1){
      setPhysical("Sedentary");
    } else if (event == 2){
      setPhysical("Light");
    } else if (event == 3){
      setPhysical("Moderate");
    } else {
      setPhysical("Vigorous");
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>How active are you?</Text>
        <Text style={styles.subHeadingText}>Select your activity level to get recommendations tailored to your lifestyle</Text>
        <CustomButton text="Sedentary" onPress={() => temp(1)} type="SECONDARY" />
        <CustomButton text="Light" onPress={() => temp(2)} type="SECONDARY" />
        <CustomButton text="Moderate" onPress={() => temp(3)} type="SECONDARY" />
        <CustomButton text="Vigorous" onPress={() => temp(4)} type="SECONDARY" />

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
  },

  subHeadingText: {
    fontSize: 18,
    color: '#8E8EA9',
    textAlign: 'center',
    marginBottom: 50,
  },

  textButton: {
    fontSize: 16,
    color: '#8E8EA9',
    textAlign: 'center',
    padding: 20
  },

  buttonWrapper: {
    marginTop: '25%'
  }

});

export default PhysicalFactorScreen;
