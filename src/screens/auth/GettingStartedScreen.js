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

const GettingStartedScreen = ({ navigation }) => {

  const onPressStart = () => {
    navigation.navigate('SignUp');
  }

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Let's get started</Text>
        <Text style={styles.subHeadingText}>Create Your Account and Start Planning Delicious Meals with Easy Delivery Options</Text>

        <CustomButton text="Get Started" onPress={onPressStart} />
        <Text style={styles.subHeadingText}>OR</Text>
        <CustomButton text="Continue with Apple" type="TERTIARY" />
        <CustomButton text="Continue with Facebook" type="TERTIARY" />
        <CustomButton text="Continue with Gmail" type="TERTIARY" />
        <CustomButton text="Sign up later" onPress={goToLogin} type="SECONDARY" />
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

});

export default GettingStartedScreen;
