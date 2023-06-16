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

const HealthGoalScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('HealthPlan');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Health Plan</Text>
        <Text style={styles.subHeadingText}>Current BMI</Text>
        <Text style={styles.headerText}>26.3</Text>
        <Text style={styles.headerText}>How many pounds would you like to lose per week?</Text>
        <Text style={styles.headerText}>Your plan is for weight loss. You have to lose 4 kg at the rate of 1 lb per week.</Text>

        <Text style={styles.headerText}>Health Plan</Text>
        <Text style={styles.headerText}>Your daily caloric goal is</Text>
        <Text style={styles.headerText}>1500 Kcal</Text>
        <Text style={styles.headerText}>-6% Calorie Deficit</Text>

        <Text style={styles.headerText}>245g</Text>
        <Text style={styles.headerText}>carbs</Text>

        <Text style={styles.headerText}>55g</Text>
        <Text style={styles.headerText}>protein</Text>

        <Text style={styles.headerText}>35g</Text>
        <Text style={styles.headerText}>fat</Text>

        <CustomButton text="Back" onPress={goBack} type="SECONDARY" />

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

export default HealthGoalScreen;
