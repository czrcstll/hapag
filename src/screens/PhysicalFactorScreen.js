import React, { useState } from 'react';
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

const PhysicalFactorScreen = () => {
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
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
      <View style={styles.root}>
        <Text style={styles.headerText}>How active are you?</Text>
        <Text style={styles.subHeadingText}>Select your activity level to get recommendations tailored to your lifestyle</Text>
        <CustomButton text="Sedentary" onPress={onSignInPressed} type="SECONDARY" />
        <CustomButton text="Light" onPress={onSignInPressed} type="SECONDARY" />
        <CustomButton text="Moderate" onPress={onSignInPressed} type="SECONDARY" />
        <CustomButton text="Vigorous" onPress={onSignInPressed} type="SECONDARY" />

        <View style={styles.buttonWrapper}>
          <CustomButton text="Back" onPress={onSignInPressed} type="SECONDARY" />
          <CustomButton text="Next" onPress={onSignInPressed} />
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
