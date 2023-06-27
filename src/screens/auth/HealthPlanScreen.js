import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import * as accountdb from '../../database/AccountDatabase';

const HealthPlanScreen = ({navigation, route}) => {

  accountdb.accountInsert([route.params.email, route.params.username, route.params.password, route.params.phone])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  const goToNextScreen = () => {
    navigation.navigate('Home');
  }

  const onSeePlan = () => {
    navigation.navigate('HealthGoal', {
      username: route.params.username,
      email: route.params.email,
      phone: route.params.phone,
      password: route.params.password,
      verification: route.params.verification,
      age: route.params.age,
      sex: route.params.sex,
      birthday: route.params.birthday,
      religion: route.params.religion,
      height: route.params.height,
      weight: route.params.weight,
      physical: route.params.physical,
      comorbidity: route.params.comorbidity,
      allergen: route.params.allergen
    });
  }

  const goBack = () => {
    navigation.navigate('Allergens',{
      username: route.params.username,
      email: route.params.email,
      phone: route.params.phone,
      password: route.params.password,
      verification: route.params.verification,
      age: route.params.age,
      sex: route.params.sex,
      birthday: route.params.birthday,
      religion: route.params.religion,
      height: route.params.height,
      weight: route.params.weight,
      physical: route.params.physical,
      comorbidity: route.params.comorbidity
    });
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.headerText}>It seems like we already know each other 🤝</Text>
        <Text style={styles.subHeadingText}>We have calculated your plan based on your bio metrics and physical factor. You can modify them anytime in your profile. However, we would like to remind you that the information on this app is not a substitute for professional medical advice, diagnosis or treatment.</Text>

        <CustomButton text="See Health Plan" onPress={onSeePlan} type="TERTIARY" />
        <CustomButton text="I have read the Terms and Conditions" onPress={goBack} type="SECONDARY" />

        <CustomButton text="Back" onPress={goBack} type="SECONDARY" />
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

export default HealthPlanScreen;
