import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

const SignUpScreen = ({navigation}) => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ password, setPassword ] = useState('');

  const goToNextScreen = () => {
    navigation.navigate('ConfirmEmail', {username: username, email: email, phone: phone, password: password});
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Getting Started</Text>
        <Text style={styles.subHeadingText}>Create an account for a complete experience</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} onChangeText={(username) => setUsername(username)} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} onChangeText={(email) => setEmail(email)} />
        <CustomInput placeholder="Phone Number" value={phone} setValue={setPhone} onChangeText={(phone) => setPhone(phone)} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
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
    fontWeight: 5
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
