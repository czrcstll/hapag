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

//CHART
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const BinaryChart = ({ binary1, binary2 }) => {
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 17 }, (_, index) => index + 1),
    datasets: [
      {
        label: 'Binary 1',
        data: binary1.split('').map(Number),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Binary 2',
        data: binary2.split('').map(Number),
        borderColor: 'rgba(192, 75, 192, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    // Combine both binary numbers and display only the first 17 bits
    const combinedBinary = (binary1 + binary2).substring(0, 17);
    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: combinedBinary.split('').map(Number),
        },
        ...prevChartData.datasets.slice(1),
      ],
    }));
  }, [binary1, binary2]);

  return (
    <div>
      <h2>Binary Chart</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Bit Position',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value',
              },
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BinaryChart;

//CHART2

import { useState } from 'react';
import BinaryChart from '../components/BinaryChart';

const Home = () => {
  const [binary1, setBinary1] = useState('');
  const [binary2, setBinary2] = useState('');

  const handleBinary1Change = (e) => {
    setBinary1(e.target.value);
  };

  const handleBinary2Change = (e) => {
    setBinary2(e.target.value);
  };

  return (
    <div>
      <h1>Binary Chart App</h1>
      <div>
        <label htmlFor="binary1">Binary 1:</label>
        <input
          type="text"
          id="binary1"
          value={binary1}
          onChange={handleBinary1Change}
        />
      </div>
      <div>
        <label htmlFor="binary2">Binary 2:</label>
        <input
          type="text"
          id="binary2"
          value={binary2}
          onChange={handleBinary2Change}
        />
      </div>
      <BinaryChart binary1={binary1} binary2={binary2} />
    </div>
  );
};

export default Home;

//APPEND
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const BinaryChart = ({ binary1, binary2 }) => {
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 17 }, (_, index) => index + 1),
    datasets: [
      {
        label: 'Binary 1',
        data: binary1.split('').map(Number),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Binary 2',
        data: binary2.split('').map(Number),
        borderColor: 'rgba(192, 75, 192, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    // Combine both binary numbers and display only the first 17 bits
    const combinedBinary = (binary1 + binary2).substring(0, 17);
    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: combinedBinary.split('').map(Number),
        },
        ...prevChartData.datasets.slice(1),
      ],
    }));
  }, [binary1, binary2]);

  return (
    <div>
      <h2>Binary Chart</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Bit Position',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value',
              },
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
      />
      <h2>Binary Numbers Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data 1</th>
            <th>Data 2</th>
            <th>Combined Binary (17 bits)</th>
            <th>Decimal Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{binary1}</td>
            <td>{binary2}</td>
            <td>{(binary1 + binary2).substring(0, 17)}</td>
            <td>{parseInt((binary1 + binary2).substring(0, 17), 2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BinaryChart;


//for the chart dependency
npx create-next-app binary-chart-app
cd binary-chart-app
npm install react-chartjs-2 chart.js

//for prisma dependency

npm install next react react-dom prisma @prisma/client

//PRISMA

Sure! Let's create a Next.js app with CRUD operations using Prisma for a model with id, data1, and data2 fields.

Set up a new Next.js app and install the required dependencies:

npx create-next-app prisma-crud-app
cd prisma-crud-app
npm install @prisma/client

Create a new file called prisma.js in the root of your project with the following content:

// prisma.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;


Create a new file called index.js in the pages directory of your Next.js app with the following content:

// pages/index.js
import { useState } from 'react';
import prisma from '../prisma';

const Home = ({ items }) => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [itemsList, setItemsList] = useState(items);

  const handleCreate = async () => {
    const newItem = await prisma.yourModelName.create({
      data: {
        data1,
        data2,
      },
    });
    setItemsList([...itemsList, newItem]);
    setData1('');
    setData2('');
  };

  const handleUpdate = async (id) => {
    await prisma.yourModelName.update({
      where: { id },
      data: {
        data1,
        data2,
      },
    });
    const updatedItems = itemsList.map((item) =>
      item.id === id ? { ...item, data1, data2 } : item
    );
    setItemsList(updatedItems);
  };

  const handleDelete = async (id) => {
    await prisma.yourModelName.delete({
      where: { id },
    });
    const updatedItems = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedItems);
  };

  return (
    <div>
      <h1>Prisma CRUD Example</h1>
      <div>
        <input
          type="text"
          value={data1}
          onChange={(e) => setData1(e.target.value)}
          placeholder="Data 1"
        />
        <input
          type="text"
          value={data2}
          onChange={(e) => setData2(e.target.value)}
          placeholder="Data 2"
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <ul>
        {itemsList.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Data1: {item.data1}, Data2: {item.data2}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const items = await prisma.yourModelName.findMany({
    select: {
      id: true,
      data1: true,
      data2: true,
    },
  });
  return { props: { items } };
}

export default Home;

Replace yourModelName with the actual name of your Prisma model in both prisma.js and index.js.
Run the app:









