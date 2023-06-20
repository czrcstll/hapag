import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import AllergensScreen from '../screens/auth/AllergensScreen';
import ComorbiditiesScreen from '../screens/auth/ComorbiditiesScreen';
import ConfirmEmailScreen from '../screens/auth/ConfirmEmailScreen';
import EnterHealthDetailsScreen from '../screens/auth/EnterHealthDetailsScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import GettingStartedScreen from '../screens/auth/GettingStartedScreen';
import HealthGoalScreen from '../screens/auth/HealthGoalScreen';
import HealthPlanScreen from '../screens/auth/HealthPlanScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PhysicalFactorScreen from '../screens/auth/PhysicalFactorScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SuccesfulPasswordChangeScreen from '../screens/auth/SuccessfulPasswordChangeScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
          
          <Stack.Screen name = 'GettingStarted' component = { GettingStartedScreen }/>
          <Stack.Screen name = 'Login' component = { LoginScreen }/>
          <Stack.Screen name = 'SignUp' component = { SignUpScreen }/>
          <Stack.Screen name = 'HealthDetails' component = { EnterHealthDetailsScreen }/>
          <Stack.Screen name = 'PhysicalFactor' component = { PhysicalFactorScreen }/>
          <Stack.Screen name = 'Comorbidities' component = { ComorbiditiesScreen }/>
          <Stack.Screen name = 'Allergens' component = { AllergensScreen }/>
          <Stack.Screen name = 'ForgotPassword' component = { ForgotPasswordScreen }/>
          <Stack.Screen name = 'ResetPassword' component = { ResetPasswordScreen }/>
          <Stack.Screen name = 'SuccessfulPasswordUpdate' component = { SuccesfulPasswordChangeScreen }/>
          <Stack.Screen name = 'ConfirmEmail' component = { ConfirmEmailScreen }/>
          <Stack.Screen name = 'HealthPlan' component = { HealthPlanScreen }/>
          <Stack.Screen name = 'HealthGoal' component = { HealthGoalScreen }/>
          
          <Stack.Screen name = 'Home' component = { HomeScreen }/>
      </Stack.Navigator>

    </NavigationContainer>
       
  )
}

export default AuthNavigator