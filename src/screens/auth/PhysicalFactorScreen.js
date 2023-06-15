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

const PhysicalFactorScreen = ({ navigation }) => {

  const { height } = useWindowDimensions();

  const goToNextScreen = () => {
    navigation.navigate('Comorbidities');
  }

  const goBack = () => {
    navigation.goBack();
  }

  const temp = () => {
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>How active are you?</Text>
        <Text style={styles.subHeadingText}>Select your activity level to get recommendations tailored to your lifestyle</Text>
        <CustomButton text="Sedentary" onPress={temp} type="SECONDARY" />
        <CustomButton text="Light" onPress={temp} type="SECONDARY" />
        <CustomButton text="Moderate" onPress={temp} type="SECONDARY" />
        <CustomButton text="Vigorous" onPress={temp} type="SECONDARY" />

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
