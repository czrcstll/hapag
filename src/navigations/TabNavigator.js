import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, FontAwesome5, Feather, Entypo} from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import MealPlanScreen from '../screens/home/MealPlanScreen';
import ShopScreen from '../screens/home/ShopScreen';
import RewardScreen from '../screens/home/RewardScreen';
import EducationalHubScreen from '../screens/home/EducationHubScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: '#fff',paddingTop: 10},
                tabBarInactiveTintColor: '#F6A43E',
                tabBarActiveTintColor: '#50269D',
            }}>
                <Tab.Screen name = 'Home2' component = { HomeScreen } 
                options = {{tabBarIcon: ({color, size}) => (
                    <Ionicons name = 'ios-home' color = {color} size = {size}/>
                ) 
            }}/>
                <Tab.Screen name = 'Shops' component={ ShopScreen }
                options = {{tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name = 'store-alt' color = {color} size = {size}/>
                ) 
            }}/>
                <Tab.Screen name = 'Meal Plan' component={ MealPlanScreen }
             options = {{tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name = 'utensils' color = {color} size = {size}/>
            ) 
            }}/>
                <Tab.Screen name = 'Rewards' component={ RewardScreen }
            options = {{tabBarIcon: ({color, size}) => (
                    <Feather name = 'shopping-bag' color = {color} size = {size}/>
            ) 
            }}/>
                <Tab.Screen name = 'Learn' component={ EducationalHubScreen }
            options = {{tabBarIcon: ({color, size}) => (
                    <Entypo name = 'light-bulb' color = {color} size = {size}/>
            ) 
            }}/>

            </Tab.Navigator>
  )
}

export default TabNavigator