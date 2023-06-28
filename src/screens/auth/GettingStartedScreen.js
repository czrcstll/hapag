import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const GettingStartedScreen = () => {

  const navigation = useNavigation();

  const onPressStart = () => {
    navigation.navigate('SignUp');
  }

  const onSignUpLater = () => {
    navigation.navigate('Login');
  }

  //Social Media Buttons
  const onAppleSignUp = () => {
    console.warn('Logging in with Apple');
  }

  const onFacebookSignUp = () => {
    console.warn('Logging in with Apple');
  }

  const onGoogleSignUp = () => {
    console.warn('Logging in with Apple');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Let's get started</Text>
        <Text style={styles.subHeadingText}>Create Your Account and Start Planning Delicious Meals with Easy Delivery Options</Text>

        <CustomButton text="Get Started" onPress={onPressStart} />
        <Text style={styles.subHeadingText}>OR</Text>
        <CustomButton text="Continue with Apple" type="TERTIARY" onPress = { onAppleSignUp }/>
        <CustomButton text="Continue with Facebook" type="TERTIARY" onPress = { onFacebookSignUp }/>
        <CustomButton text="Continue with Google" type="TERTIARY" onPress = { onGoogleSignUp }/>
        <CustomButton text="Login" onPress={onSignUpLater} type="SECONDARY" />
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
    marginTop: 10,
    fontSize: 18,
    color: '#8E8EA9',
    textAlign: 'center',
    marginBottom: 50,
  },

});

export default GettingStartedScreen;
