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

const HealthPlanScreen = ({navigation, route}) => {

  const goToNextScreen = () => {
    navigation.navigate('Home');
  }

  const onSeePlan = () => {
    navigation.navigate('HealthGoal');
  }

  const goBack = () => {
    navigation.navigate('Allergens');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>It seems like we already know each other 🤝</Text>
        <Text style={styles.subHeadingText}>We have calculated your plan based on your bio metrics and physical factor. You can modify them anytime in your profile. However, we would like to remind you that the information on this app is not a substitute for professional medical advice, diagnosis or treatment.</Text>

        <CustomButton text="See Health Plan" onPress={onSeePlan} type="TERTIARY" />
        <CustomButton text="I have read the Terms and Conditions" onPress={goBack} type="SECONDARY" />

        <CustomButton text="Back" onPress={goBack} type="SECONDARY" />
        <CustomButton text="Next" onPress={goToNextScreen} />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 30,
    marginTop: 10
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
  },

  measurementsWrapper: {
    display: 'flex',
    flexDirection: 'column'
  }

});

export default HealthPlanScreen;
