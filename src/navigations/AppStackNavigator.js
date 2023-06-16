import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from '../screens/home/HomeScreen';
import MealScreen from '../screens/meals/MealScreen';
import MealPlanScreen from '../screens/home/MealPlanScreen';
import CartScreen from '../screens/cart/CartScreen';
import CheckOutScreen from '../screens/cart/CheckOutScreen';
import RecipeScreen from '../screens/meals/RecipeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent = { props => <CustomDrawer {...props}/>} screenOptions = {{headerShown: false}}>
          <Drawer.Screen name = 'Home' component = { HomeScreen }/>
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
    </NavigationContainer>

  )
}

export default AppStackNavigator