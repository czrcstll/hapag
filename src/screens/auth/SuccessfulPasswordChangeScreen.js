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
const SuccesfulPasswordChangeScreen = () => {

    const navigation = useNavigation();

    const onLoginPressed = () =>{
        navigation.navigate('Login');
      }

      const onSignUpPressed = () =>{
        navigation.navigate('GettingStarted');
      }
  return (
    <SafeAreaView>
        <View style = {styles.root}>
        <Text style = {styles.headerText}>Update Successful</Text>
        <Text style = {styles.subHeadingText}>Your password has been updated!</Text>
        </View>
        <CustomButton text = "Sign up" type = "SECONDARY" onPress = {onSignUpPressed}/>
        <CustomButton text = "Login" onPress = {onLoginPressed}/>
    

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

export default SuccesfulPasswordChangeScreen