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

const ForgotPasswordScreen = () => {

  const navigation = useNavigation();
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  const handleForgotPassword = () => { 
    navigation.navigate('ResetPassword');
  }

  const goBack = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Forgot your password?</Text>
        <Text style={styles.subHeadingText}>Enter the email address that is associated with your account</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <Text style={styles.feedbackText}>We will email you a link to reset your password</Text>
        <View style={styles.buttonWrapper}>
          <CustomButton text="Back" onPress={goBack} type="SECONDARY" />
          <CustomButton text="Send" onPress={handleForgotPassword} />
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

  feedbackText: {
    color: '#F6A43E',
    fontSize: 14
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

export default ForgotPasswordScreen;
