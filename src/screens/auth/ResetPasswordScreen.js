import React, {useState} from 'react';
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

const ResetPasswordScreen = () => {
    const navigation = useNavigation();

    const {newPassword, setNewPassword} = useState('');
    const {newCode, setNewCode} = useState('');


    const onFinishedPressed = () =>{
        console.warn('You have successfully changed your password! You may now login');
        navigation.navigate('Login');
      }

      const goBack = () =>{
        navigation.navigate('ForgotPassword');
      }

      const onResendPressed = () =>{
        console.warn('We have sent a new code to your email!');
      }
  return (
    <SafeAreaView>
        <View style = {styles.root}>
        <CustomButton text = "Back" type = "SECONDARY" onPress = {goBack}/>
        <Text style = {styles.headerText}>Reset your Password</Text>
        <Text style = {styles.subHeadingText}>Enter the code we just sent to your email address to confirm your account verification</Text>
        <CustomInput placeholder = "Enter Code" value = {newCode} setValue = {setNewCode}/>
        <CustomInput placeholder = "Enter New Password" value = {newPassword} setValue = {setNewPassword}/>
        <CustomButton text = "Resend Code" type = "SECONDARY" onPress = {onResendPressed}/>
        </View>
        
        <CustomButton text = "Finish" onPress = {onFinishedPressed}/>
    

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

export default ResetPasswordScreen