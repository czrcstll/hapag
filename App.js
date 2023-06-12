import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  NavigationContainer
} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import GettingStartedScreen from './src/screens/GettingStartedScreen';
import EnterHealthDetailsScreen from './src/screens/EnterHealthDetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import PhysicalFactorScreen from './src/screens/PhysicalFactorScreen';
import ComorbiditiesScreen from './src/screens/ComorbiditiesScreen';
import AllergensScreen from './src/screens/AllergensScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

const App = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <ConfirmEmailScreen/>
    </SafeAreaView>
    )
}
//For styling the components
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },

  wrapper: {
    flex: 1
  },

  
});

export default App 