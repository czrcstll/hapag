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

const LoginScreen = ({ navigation }) => {
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  const { height } = useWindowDimensions();

  const handleLogin = () => {
    console.warn('Login');
  }

  const onPressSignIn = () => {
    navigation.navigate('GettingStarted');
  }

  const onPressForgot = () => {
    navigation.navigate('ForgotPassword');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subHeadingText}>Sign In to Access Your Personalized Meal Plan and Delivery Options</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text="Forgot your password?" onPress={onPressForgot} type="SECONDARY" />
        <View style={styles.buttonWrapper}>
          <CustomButton text="Sign up" onPress={onPressSignIn} type="SECONDARY" />
          <CustomButton text="Login" onPress={handleLogin} />
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

export default LoginScreen;
