import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
const ConfirmEmailScreen = ({navigation, route}) => {

    const [verificationCode, setVerificationCode] = useState('');

    const onVerifiedPressed = () =>{
      if(verificationCode == 'Aaa'){
        console.warn('Congratulations for verifying your email!');
        navigation.navigate('HealthDetails', {
          username: route.params.username,
          email: route.params.email,
          phone: route.params.phone,
          password: route.params.password,
          verification: verificationCode
        });
      }else{
        console.warn('Wrong verification!');
      }
    }

      const onResendPressed = () =>{
        console.warn('We have sent a new code to your email!');
      }
  return (
    <SafeAreaView>
        <View style = {styles.root}>
        <CustomButton text = "Back to Sign In" type = "SECONDARY" onPress = {onResendPressed}/>
        <Text style = {styles.headerText}>Email Verification </Text>
        <Text style = {styles.subHeadingText}>Hi {route.params.username}!{"\n"}Enter the code we just sent to {route.params.email}{"\n"} to confirm your account verification</Text>
        <CustomInput placeholder = "Enter Code" value = {verificationCode} setValue = {setVerificationCode} onChangeText={(verificationCode) => setVerificationCode(verificationCode)}/>
        </View>
        <CustomButton text = "Resend Code" type = "SECONDARY" onPress = {onResendPressed}/>
        <CustomButton text = "Verify" onPress = {onVerifiedPressed}/>
    

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

  messagePrompt: {
    color: '#F6A43E',
  },

  resendCode: {
    display: 'flex',
    flexDirection: 'row',
    
  }

});

export default ConfirmEmailScreen