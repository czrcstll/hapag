import React, {useState} from 'react';
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions
 } from 'react-native';
 import CustomInput from '../components/CustomInput/CustomInput';
 import CustomButton from '../components/CustomButton/CustomButton';

const AllergensScreen = () => {


  const onSignInPressed = () =>{
    console.warn('Sign in');
  }

  /*
  //put in login page
  const onForgotPasswordPressed = () => {
    console.warn{'onForgotPasswordPressed'};
  }
*/
  return (
    <SafeAreaView>
      <View style = {styles.root}>
      <Text style = {styles.headerText}>Do you have any food allergen?</Text>
        <Text style = {styles.subHeadingText}>Let us tailor your food choices according to your conditions</Text>

        <Text style = {styles.subHeadingText}>Select all that applies</Text>
        <CustomButton text = "Egg" onPress = {onSignInPressed} type = "TERTIARY"/>
        <CustomButton text = "Nuts" onPress = {onSignInPressed} type = "TERTIARY"/>
        <CustomButton text = "Gluten" onPress = {onSignInPressed} type = "TERTIARY"/>
        <CustomButton text = "Milk" onPress = {onSignInPressed} type = "TERTIARY"/>
        <CustomButton text = "Soy" onPress = {onSignInPressed} type = "TERTIARY"/>
        <CustomButton text = "Shellfish" onPress = {onSignInPressed} type = "TERTIARY"/>


        <View style = {styles.buttonWrapper}>
        <CustomButton text = "Back" onPress = {onSignInPressed} type = "SECONDARY"/>
        <CustomButton text = "Next" onPress = {onSignInPressed}/>
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


export default AllergensScreen