import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { COLORS } from '../constants';

import MyProfileScreen from '../screens/drawer/MyProfileScreen';
import SubscriptionsScreen from '../screens/drawer/SubscriptionsScreen';
import ReferralScreen from '../screens/drawer/ReferralScreen';
import RewardScreen from '../screens/drawer/RewardScreen';
import TeleconsultScreen from '../screens/drawer/TeleconsultScreen';
import SettingsScreen from '../screens/drawer/SettingsScreen';
import FeedbackScreen from '../screens/drawer/FeedbackScreen';
import DriverScreen from '../screens/drawer/DriverScreen';
import TermsConditionsScreen from '../screens/drawer/TermsConditionsScreen';

import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator 
        drawerContent = { props => <CustomDrawer {...props}/>} 
        screenOptions = {{
          headerShown: false,
          drawerActiveBackgroundColor: COLORS.orange,
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            fontSize: 16
          } }}>
          <Drawer.Screen name = 'Home1' component = { TabNavigator }/>
          <Drawer.Screen name = 'Profile' component = { MyProfileScreen }/>
          <Drawer.Screen name = 'Rewards' component = { RewardScreen }/>
          <Drawer.Screen name = 'Subscriptions' component = { SubscriptionsScreen }/>
          <Drawer.Screen name = 'Teleconsult' component = { TeleconsultScreen }/>
          <Drawer.Screen name = 'Referrals' component = { ReferralScreen }/>
          <Drawer.Screen name = 'Settings' component = { SettingsScreen }/>
          <Drawer.Screen name = 'Share Feedback' component = { FeedbackScreen }/>
          <Drawer.Screen name = 'Drive with Hapag' component = { DriverScreen }/>
          <Drawer.Screen name = 'Terms and Conditions' component = { TermsConditionsScreen }/>
        </Drawer.Navigator>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = 'MealPlan' component = { MealPlanScreen }/>
            <Stack.Screen name = 'Meal' component = { MealScreen }/>
            <Stack.Screen name = 'Recipe' component = { RecipeScreen }/>
            <Stack.Screen name = 'Cart' component = { CartScreen }/>
            <Stack.Screen name = 'CheckOut' component = { CheckOutScreen }/>
        </Stack.Navigator>

    </NavigationContainer>

  )
}

export default AppStackNavigator