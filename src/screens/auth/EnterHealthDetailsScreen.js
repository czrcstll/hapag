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

const EnterHealthDetailsScreen = ({ navigation }) => {
  const { age, setAge } = useState('');

  const { sex, setSex } = useState('');
  const { birthday, setBirthday } = useState('');
  const { religion, setReligion } = useState('');

  const { height, setHeight } = useState('');
  const { weight, setWeight } = useState('');

  const goToNextScreen = () => {
    navigation.navigate('PhysicalFactor');
  }

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>Enter your health details</Text>
        <Text style={styles.subHeadingText}>Get customized meal recommendations according to your needs</Text>

        <CustomInput placeholder="Age" value={age} setValue={setAge} />
        <CustomInput placeholder="Sex" value={sex} setValue={setSex} />
        <CustomInput placeholder="Birthday" value={birthday} setValue={setBirthday} />
        <CustomInput placeholder="Religion" value={religion} setValue={setReligion} />

        <View style={styles.measurementsWrapper}>
          <CustomInput placeholder="Height(cm)" value={height} setValue={setHeight} />
          <CustomInput placeholder="Weight(kg)" value={weight} setValue={setWeight} />
        </View>

        <CustomButton text="Sign up later" onPress={goToLogin} type="SECONDARY" />
        <CustomButton text="Next" onPress={goToNextScreen} />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 30,
    marginTop: 10
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
  },

  measurementsWrapper: {
    display: 'flex',
    flexDirection: 'column'
  }

});

export default EnterHealthDetailsScreen;
