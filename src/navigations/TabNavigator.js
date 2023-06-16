import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/home/HomeScreen';
import MealPlanScreen from '../screens/home/MealPlanScreen';
import ShopScreen from '../screens/home/ShopScreen';
import OrderScreen from '../screens/home/OrderScreen';
import EducationalHubScreen from '../screens/home/EducationHubScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name = 'Home2' component={ HomeScreen }/>
                <Tab.Screen name = 'Shops' component={ ShopScreen }/>
                <Tab.Screen name = 'Meal Plan' component={ MealPlanScreen }/>
                <Tab.Screen name = 'Order' component={ OrderScreen }/>
                <Tab.Screen name = 'Learn' component={ EducationalHubScreen }/>
            </Tab.Navigator>
  )
}

export default TabNavigator