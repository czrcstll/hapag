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
import HomeScreen from '../screens/home/HomeScreen';
import MealScreen from '../screens/meals/MealScreen';
import MealPlanScreen from '../screens/home/MealPlanScreen';
import CartScreen from '../screens/cart/CartScreen';
import CheckOutScreen from '../screens/cart/CheckOutScreen';
import RecipeScreen from '../screens/meals/RecipeScreen';
import HealthPlanScreen from '../screens/auth/HealthPlanScreen';
import HealthGoalScreen from '../screens/auth/HealthGoalScreen';
import SuccesfulPasswordChangeScreen from '../screens/auth/SuccessfulPasswordChangeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
          
            <Stack.Screen name = 'MealPlan' component = { MealPlanScreen }/>
            <Stack.Screen name = 'Meal' component = { MealScreen }/>
            <Stack.Screen name = 'Recipe' component = { RecipeScreen }/>
            <Stack.Screen name = 'Cart' component = { CartScreen }/>
            <Stack.Screen name = 'CheckOut' component = { CheckOutScreen }/>
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