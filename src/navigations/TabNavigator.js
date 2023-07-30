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

//CRUD--- CREATE


import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await prisma.yourModelName.findMany({
      select: {
        id: true,
        data1: true,
        data2: true,
      },
    });
    setData(result);
  };

  return (
    <div>
      <h1>Prisma CRUD Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Data1: {item.data1}, Data2: {item.data2}
          </li>
        ))}
      </ul>
    </div>
  );
}

//CREATE UPDATE DELETE
// ... (previous code)

export default function Home() {
  // ... (previous code)

  const handleCreate = async () => {
    const newData = {
      data1: 'New Data 1',
      data2: 'New Data 2',
    };

    const createdItem = await prisma.yourModelName.create({
      data: newData,
    });

    setData([...data, createdItem]);
  };

  const handleUpdate = async (id) => {
    const updatedItem = await prisma.yourModelName.update({
      where: { id },
      data: {
        data1: 'Updated Data 1',
        data2: 'Updated Data 2',
      },
    });

    setData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleDelete = async (id) => {
    await prisma.yourModelName.delete({
      where: { id },
    });

    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // ... (previous code)

  return (
    <div>
      <h1>Prisma CRUD Example</h1>
      <button onClick={handleCreate}>Create</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Data1: {item.data1}, Data2: {item.data2}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}




