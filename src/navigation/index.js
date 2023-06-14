import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../screens/SignUpScreen';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import EnterHealthDetailsScreen from '../screens/EnterHealthDetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PhysicalFactorScreen from '../screens/PhysicalFactorScreen';
import ComorbiditiesScreen from '../screens/ComorbiditiesScreen';
import AllergensScreen from '../screens/AllergensScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "GettingStarted" component = { GettingStartedScreen }/>
            <Stack.Screen name = "SignUp" component = { SignUpScreen }/>
            <Stack.Screen name = "ConfirmEmail" component = { ConfirmEmailScreen}/>
            <Stack.Screen name = "Login" component = { LoginScreen }/>
            <Stack.Screen name = "ForgotPassword" component = { ForgotPasswordScreen }/>
            <Stack.Screen name = "ResetPassword" component = { ResetPasswordScreen}/>
            <Stack.Screen name = "HealthDetails" component = { EnterHealthDetailsScreen }/>
            <Stack.Screen name = "PhysicalFactor" component = { PhysicalFactorScreen }/>
            <Stack.Screen name = "Comorbidities" component = { ComorbiditiesScreen }/>
            <Stack.Screen name = "Allergens" component = { AllergensScreen }/>

            <Stack.Screen name = "Home" component = { HomeScreen }/>
        </Stack.Navigator>
        <Text>NAVIGATION</Text>
    </NavigationContainer>
  )
}

export default Navigation
