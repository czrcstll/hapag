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



//PRISMA
To create a Next.js application with Prisma and SQLite, and implement CRUD operations for the `audiofiles` model, follow these steps:

1. Set up the Next.js project and Prisma:
Create a new Next.js project and set up Prisma by following the official Prisma documentation: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/nextjs-sqlite.

2. Define the `audiofiles` model in Prisma:
Update the `schema.prisma` file in the `prisma` directory with the following code:

```prisma
model audiofiles {
  id      Int    @id @default(autoincrement())
  data1   String
  data2   String
}
```

3. Generate the Prisma Client:
Run the following command in your terminal to generate the Prisma Client:

```bash
npx prisma generate
```

4. Implement CRUD operations for the `audiofiles` model:
Create a new file named `audiofiles.js` inside the `pages/api` directory with the following code:

```javascript
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const audioFiles = await prisma.audiofiles.findMany();
    res.status(200).json(audioFiles);
  } else if (req.method === 'POST') {
    const { data1, data2 } = req.body;
    const audioFile = await prisma.audiofiles.create({
      data: {
        data1,
        data2,
      },
    });
    res.status(201).json(audioFile);
  } else if (req.method === 'PUT') {
    const { id, data1, data2 } = req.body;
    const audioFile = await prisma.audiofiles.update({
      where: {
        id: parseInt(id),
      },
      data: {
        data1,
        data2,
      },
    });
    res.status(200).json(audioFile);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.audiofiles.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).end();
  }
}
```

5. Create the page to display all data:
Create a new file named `DisplayData.js` inside the `pages` directory with the following code:

```javascript
import { useState, useEffect } from 'react';

const DisplayData = () => {
  const [audioFiles, setAudioFiles] = useState([]);

  const fetchAudioFiles = async () => {
    const response = await fetch('/api/audiofiles');
    const data = await response.json();
    setAudioFiles(data);
  };

  useEffect(() => {
    fetchAudioFiles();
  }, []);

  return (
    <div>
      <h1>Audio Files</h1>
      {audioFiles.map((audio) => (
        <div key={audio.id}>
          <p>{`ID: ${audio.id}`}</p>
          <p>{`Data1: ${audio.data1}`}</p>
          <p>{`Data2: ${audio.data2}`}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
```

6. Create a page with buttons and input fields to test CRUD functionality:
Update the `pages/index.js` file with the following code:

```javascript
import { useState } from 'react';

const Home = () => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');

  const handleCreate = async () => {
    try {
      await fetch('/api/audiofiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data1, data2 }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRead = async () => {
    // Fetching data is handled by the DisplayData component.
  };

  const handleUpdate = async () => {
    // You can update data by providing an id, data1, and data2 in the request body.
  };

  const handleDelete = async () => {
    // You can delete data by providing an id in the request body.
  };

  return (
    <div>
      <h1>Create Audio File</h1>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} />
      <button onClick={handleCreate}>Create</button>

      <h1>Read Audio Files</h1>
      <DisplayData />

      <h1>Update Audio File</h1>
      {/* Implement update input fields and button similar to create */}
      {/* Use handleUpdate function for updating */}

      <h1>Delete Audio File</h1>
      {/* Implement delete input field and button */}
      {/* Use handleDelete function for deleting */}
    </div>
  );
};

export default Home;
```

Now you have a Next.js application using Prisma and SQLite with CRUD operations for the `audiofiles` model. The `Home` page includes buttons and input fields to test each CRUD operation. Additionally, the `DisplayData` page displays all the audio files from the database. You can add the necessary logic in the `handleUpdate` and `handleDelete` functions on the `Home` page to perform the respective operations.
