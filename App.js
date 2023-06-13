import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  NavigationContainer
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import GettingStartedScreen from './src/screens/GettingStartedScreen';
import EnterHealthDetailsScreen from './src/screens/EnterHealthDetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import PhysicalFactorScreen from './src/screens/PhysicalFactorScreen';
import ComorbiditiesScreen from './src/screens/ComorbiditiesScreen';
import AllergensScreen from './src/screens/AllergensScreen';

const App = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <SignInScreen/>
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