import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import GettingStartedScreen from '../screens/auth/GettingStartedScreen';
import EnterHealthDetailsScreen from '../screens/auth/EnterHealthDetailsScreen';
import PhysicalFactorScreen from '../screens/auth/PhysicalFactorScreen';
import ComorbiditiesScreen from '../screens/auth/ComorbiditiesScreen';
import AllergensScreen from '../screens/auth/AllergensScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ConfirmEmailScreen from '../screens/auth/ConfirmEmailScreen';
import { ROUTES } from '../constants';

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
            <Stack.Screen name = 'ConfirmEmail' component = { ConfirmEmailScreen }/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AuthNavigator