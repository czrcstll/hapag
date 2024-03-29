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


//
Creating a complete CRUD (Create, Read, Update, Delete) for an offline MongoDB database in a Next.js app requires several steps. Below is a high-level overview of the process:

Set up Next.js project:
Create a new Next.js project using create-next-app.
Install required dependencies, such as mongodb-memory-server, mongoose, and next-connect.
Define the AudioFile model:
Create a models folder and define the AudioFile model using Mongoose. It should have fields: id, data1, and data2.
Create API routes:
Create API routes using Next.js' built-in API routes feature. These routes will handle CRUD operations for the AudioFile model.
Implement CRUD operations:
In the API routes, implement functions to handle CRUD operations (create, read, update, delete) using Mongoose methods.
Set up offline MongoDB database:
Use mongodb-memory-server to set up an offline MongoDB instance. This will allow you to perform CRUD operations locally without a real MongoDB server.
Test the CRUD operations:
Test each CRUD operation (create, read, update, delete) using tools like Postman or curl to interact with the API endpoints.
Here's a simplified example for the API routes:

// pages/api/audiofiles.js

import mongoose from 'mongoose';
import nextConnect from 'next-connect';

// Connect to the offline MongoDB database
mongoose.connect('mongodb://localhost/my_offline_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const AudioFileSchema = new mongoose.Schema({
  id: { type: String, required: true },
  data1: { type: String, required: true },
  data2: { type: String, required: true },
});

const AudioFile = mongoose.models.AudioFile || mongoose.model('AudioFile', AudioFileSchema);

const handler = nextConnect();

handler.get(async (req, res) => {
  const audioFiles = await AudioFile.find();
  res.json(audioFiles);
});

handler.post(async (req, res) => {
  const { id, data1, data2 } = req.body;
  const audioFile = new AudioFile({ id, data1, data2 });
  await audioFile.save();
  res.status(201).json(audioFile);
});

handler.put(async (req, res) => {
  const { id, data1, data2 } = req.body;
  const audioFile = await AudioFile.findOneAndUpdate({ id }, { data1, data2 });
  res.json(audioFile);
});

handler.delete(async (req, res) => {
  const { id } = req.body;
  await AudioFile.findOneAndDelete({ id });
  res.status(204).end();
});

export default handler;

//
To create buttons that interact with the offline MongoDB database in the Next.js app, you can follow these steps:

Create a new component for the buttons.
Implement functions to handle CRUD operations when the buttons are clicked.
Render the buttons in your desired page or component.
Here's an example of how you can create the buttons component:

// components/AudioFileButtons.js

import { useState } from 'react';

const AudioFileButtons = () => {
  const [audioFile, setAudioFile] = useState({ id: '', data1: '', data2: '' });

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/audiofiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(audioFile),
      });
      if (response.ok) {
        alert('Audio file created successfully!');
        setAudioFile({ id: '', data1: '', data2: '' });
      } else {
        alert('Failed to create audio file.');
      }
    } catch (error) {
      alert('An error occurred while creating the audio file.');
      console.error(error);
    }
  };

  // Implement handleRead, handleUpdate, and handleDelete functions in a similar manner.

  return (
    <div>
      <h2>Create Audio File</h2>
      <input
        type="text"
        placeholder="ID"
        value={audioFile.id}
        onChange={(e) => setAudioFile({ ...audioFile, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Data 1"
        value={audioFile.data1}
        onChange={(e) => setAudioFile({ ...audioFile, data1: e.target.value })}
      />
      <input
        type="text"
        placeholder="Data 2"
        value={audioFile.data2}
        onChange={(e) => setAudioFile({ ...audioFile, data2: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
      {/* Implement other buttons (Read, Update, Delete) similarly */}
    </div>
  );
};

export default AudioFileButtons;


Now, you can render this component in your desired page or component where you want to use the buttons:

// pages/index.js (or any other page)

import AudioFileButtons from '../components/AudioFileButtons';

const HomePage = () => {
  return (
    <div>
      <h1>Audio File Management</h1>
      <AudioFileButtons />
    </div>
  );
};

export default HomePage;


The AudioFileButtons component will render input fields for id, data1, and data2, and buttons to perform CRUD operations. When you click the "Create" button, it will trigger the handleCreate function, and the data from the input fields will be sent to the backend API for creating a new audio file in the offline MongoDB database. You can implement similar functions for the "Read," "Update," and "Delete" buttons as well.


//displaying table

create a page where data from the offline MongoDB database is displayed along with a search button and arrow keys file checker, follow these steps:

Create a new page to display the data.
Implement a function to fetch data from the database and store it in the component state.
Implement functions to handle search functionality and arrow key file checker.
Render the data along with search input, search button, and arrow key controls.
Here's an example of how you can achieve this:

// pages/dataPage.js

import { useState, useEffect } from 'react';

const DataPage = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to fetch data from the database and store it in the state.
    const fetchData = async () => {
      try {
        const response = await fetch('/api/audiofiles');
        if (response.ok) {
          const data = await response.json();
          setAudioFiles(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle search functionality.
  const handleSearch = () => {
    // Implement search functionality based on the searchTerm state.
    // Filter the audioFiles array based on the search term, and update the display accordingly.
  };

  // Function to handle arrow key file checker.
  const handleArrowKeys = (e) => {
    // Implement arrow key functionality to navigate through the audioFiles array.
    // Update the currentIndex state to control the displayed file.
  };

  return (
    <div>
      <h1>Audio Files</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {/* Display the data from the database */}
        {/* Implement arrow key file checker with currentIndex */}
      </div>
    </div>
  );
};

export default DataPage;


To integrate this page into your Next.js app, you can add it to your pages directory, and then set up navigation to this page through your app's routing system.

The DataPage component will display the audio files retrieved from the offline MongoDB database. You can implement the search functionality and arrow key file checker based on your specific use case. When you type in the search input and click the "Search" button, it should filter the displayed audio files based on the search term. The arrow key file checker should allow you to navigate through the displayed files using arrow keys.

Remember to customize the search functionality and arrow key file checker to suit your specific database schema and requirements. Additionally, consider adding error handling, loading states, and other improvements to enhance the user experience.





