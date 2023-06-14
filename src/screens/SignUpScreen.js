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

const SignUpScreen = ({ navigation }) => {
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { phone, setPhone } = useState('');
  const { password, setPassword } = useState('');

  const { height } = useWindowDimensions();

  const goToNextScreen = () => {
    navigation.navigate('EnterHealthDetails');
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Getting Started</Text>
        <Text style={styles.subHeadingText}>Create an account for a complete experience</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Phone Number" value={phone} setValue={setPhone} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <View style={styles.buttonWrapper}>
          <CustomButton text="Sign up later" onPress={goBack} type="SECONDARY" />
          <CustomButton text="Next" onPress={goToNextScreen} />
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

export default SignUpScreen;
