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
import { useNavigation } from '@react-navigation/native';

const EnterHealthDetailsScreen = ({navigation, route}) => {

  const [ age, setAge ] = useState('');
  const [ sex, setSex ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ religion, setReligion ] = useState('');
  const [ height, setHeight ] = useState('');
  const [ weight, setWeight ] = useState('');

  const goToNextScreen = () => {
    navigation.navigate('PhysicalFactor', {
      username: route.params.username,
      email: route.params.email,
      phone: route.params.phone,
      password: route.params.password,
      verification: route.params.verification,
      age: age,
      sex: sex,
      birthday: birthday,
      religion: religion,
      height: height,
      weight: weight
    });
  }

  const goBack = () => {
    navigation.navigate('SignUp',
    {
      username: route.params.username,
      email: route.params.email,
      phone: route.params.phone,
      password: route.params.password
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      <View style={styles.root}>
        <Text style={styles.headerText}>Enter your health details</Text>
        <Text style={styles.subHeadingText}>Get customized meal recommendations according to your needs</Text>

        <CustomInput placeholder="Age" value={age} setValue={setAge} onChangeText={(age) => setAge(age)}  />
        <CustomInput placeholder="Sex" value={sex} setValue={setSex} onChangeText={(sex) => setSex(sex)} />
        <CustomInput placeholder="Birthday" value={birthday} setValue={setBirthday}  onChangeText={(birthday) => setBirthday(birthday)} />
        <CustomInput placeholder="Religion" value={religion} setValue={setReligion} onChangeText={(religion) => setReligion(religion)} />

          <CustomInput placeholder="Height(cm)" value={height} setValue={setHeight} onChangeText={(height) => setHeight(height)} />
          <CustomInput placeholder="Weight(kg)" value={weight} setValue={setWeight} onChangeText={(weight) => setWeight(weight)} />


        <CustomButton text="Back" onPress={goBack} type="SECONDARY" />
        <CustomButton text="Next" onPress={goToNextScreen} />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    alignContent: 'center',
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

});

export default EnterHealthDetailsScreen;
