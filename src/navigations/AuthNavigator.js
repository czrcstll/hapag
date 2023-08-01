import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import AllergensScreen from '../screens/auth/AllergensScreen';
import ComorbiditiesScreen from '../screens/auth/ComorbiditiesScreen';
import ConfirmEmailScreen from '../screens/auth/ConfirmEmailScreen';
import EnterHealthDetailsScreen from '../screens/auth/EnterHealthDetailsScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import GettingStartedScreen from '../screens/auth/GettingStartedScreen';
import HealthGoalScreen from '../screens/auth/HealthGoalScreen';
import HealthPlanScreen from '../screens/auth/HealthPlanScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PhysicalFactorScreen from '../screens/auth/PhysicalFactorScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SuccesfulPasswordChangeScreen from '../screens/auth/SuccessfulPasswordChangeScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
          
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



//CRUD
Creating a complete Next.js application with a database and CRUD functionality is beyond the scope of a concise answer. However, I can provide you with an outline and some code snippets to get you started. Please note that this is a simplified example and might not be suitable for production use. Also, ensure you have Node.js and npm installed before proceeding.

1. Set up the Next.js project:
Create a new Next.js project using the following commands in your terminal:

```bash
npx create-next-app nextjs-sqlite-crud
cd nextjs-sqlite-crud
```

2. Install required packages:
Install the necessary packages for SQLite and session handling:

```bash
npm install sqlite3 express-session
```

3. Set up the SQLite database:
Create a new file named `db.js` in the root of your project and add the following code:

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS audiofiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data1 TEXT,
      data2 TEXT
    )
  `);
});

module.exports = db;
```

4. Implement CRUD operations:
Create a new file named `api/audiofiles.js` in the root of your project and add the following code:

```javascript
const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  db.all('SELECT * FROM audiofiles', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { data1, data2 } = req.body;

  if (!data1 || !data2) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const stmt = db.prepare('INSERT INTO audiofiles (data1, data2) VALUES (?, ?)');
  stmt.run(data1, data2, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    res.json({ message: 'Audio file created successfully' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { data1, data2 } = req.body;

  if (!data1 || !data2) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const stmt = db.prepare('UPDATE audiofiles SET data1=?, data2=? WHERE id=?');
  stmt.run(data1, data2, id, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    res.json({ message: 'Audio file updated successfully' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM audiofiles WHERE id=?', id, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    res.json({ message: 'Audio file deleted successfully' });
  });
});

module.exports = router;
```

5. Set up the Next.js API routes:
Edit the `pages/api/audiofiles.js` file to include the following:

```javascript
import audiofilesRouter from '../../api/audiofiles';

export default audiofilesRouter;
```

6. Create a basic UI with buttons for CRUD operations:
Edit the `pages/index.js` file and add the following code:

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

  // Implement other CRUD operations similarly using fetch.

  return (
    <div>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      {/* Add buttons for other CRUD operations */}
    </div>
  );
};

export default Home;
```

Remember to run the Next.js development server:

```bash
npm run dev
```

This example demonstrates a simple setup for a Next.js application with SQLite and CRUD functionality for an "audiofiles" model. It includes basic buttons for creating audio files, and you can expand it to include update and delete functionality similarly.

Keep in mind that this example lacks validation, error handling, and authentication, which are essential for a real-world application. In a production environment, you should implement additional security measures and best practices.

//
Certainly! Here's the implementation for the rest of the CRUD functionalities: Read, Update, and Delete.

1. Read (Retrieve) functionality:
Add the following code to the `pages/index.js` file:

```javascript
import { useEffect, useState } from 'react';

const Home = () => {
  // ... Existing code

  const [audioFiles, setAudioFiles] = useState([]);

  const handleRead = async () => {
    try {
      const response = await fetch('/api/audiofiles');
      const data = await response.json();
      setAudioFiles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRead();
  }, []);

  // ... Existing code

  return (
    <div>
      {/* ... Existing code */}
      <button onClick={handleRead}>Read</button>
      {audioFiles.map((audio) => (
        <div key={audio.id}>
          <p>{audio.data1}</p>
          <p>{audio.data2}</p>
        </div>
      ))}
    </div>
  );
};
```

2. Update functionality:
Add the following code to the `pages/index.js` file:

```javascript
const Home = () => {
  // ... Existing code

  const [updateId, setUpdateId] = useState('');
  const [updateData1, setUpdateData1] = useState('');
  const [updateData2, setUpdateData2] = useState('');

  const handleUpdate = async () => {
    try {
      await fetch(`/api/audiofiles/${updateId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data1: updateData1, data2: updateData2 }),
      });
      handleRead();
    } catch (error) {
      console.error(error);
    }
  };

  // ... Existing code

  return (
    <div>
      {/* ... Existing code */}
      <div>
        <input type="text" value={updateId} onChange={(e) => setUpdateId(e.target.value)} />
        <input type="text" value={updateData1} onChange={(e) => setUpdateData1(e.target.value)} />
        <input type="text" value={updateData2} onChange={(e) => setUpdateData2(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};
```

3. Delete functionality:
Add the following code to the `pages/index.js` file:

```javascript
const Home = () => {
  // ... Existing code

  const [deleteId, setDeleteId] = useState('');

  const handleDelete = async () => {
    try {
      await fetch(`/api/audiofiles/${deleteId}`, {
        method: 'DELETE',
      });
      handleRead();
    } catch (error) {
      console.error(error);
    }
  };

  // ... Existing code

  return (
    <div>
      {/* ... Existing code */}
      <div>
        <input type="text" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
```

Now, the `pages/index.js` file includes the Read, Update, and Delete functionalities in addition to the Create functionality. The audio files will be displayed below the buttons when you click the "Read" button. You can use the input fields and respective buttons to perform the Update and Delete operations.

Remember that this example doesn't include error handling and proper validation, which are essential in a real-world application. Implementing additional security measures and best practices is important for a production-ready application.


//
To display the current data of the session database, we can create a new page in the Next.js application. We will fetch the data from the database and show it on the page. Let's call this page `DisplayData.js`.

1. Create the `DisplayData.js` page:
Create a new file named `DisplayData.js` inside the `pages` folder. Add the following code:

```javascript
import { useEffect, useState } from 'react';

const DisplayData = () => {
  const [audioFiles, setAudioFiles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/audiofiles');
      const data = await response.json();
      setAudioFiles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Current Data in the Database</h1>
      <ul>
        {audioFiles.map((audio) => (
          <li key={audio.id}>
            <p>{`Data1: ${audio.data1}`}</p>
            <p>{`Data2: ${audio.data2}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
```

2. Add a link to the new page in the navigation:
In the `pages/index.js` file, you can add a link to the `DisplayData` page. For example:

```javascript
import Link from 'next/link';

const Home = () => {
  // ... Existing code

  return (
    <div>
      {/* ... Existing code */}
      <Link href="/display-data">
        <a>Display Data</a>
      </Link>
    </div>
  );
};

export default Home;
```

3. Update the API route to handle GET request with session data:
Modify the `pages/api/audiofiles.js` file to include the following:

```javascript
import db from '../../db';

// ... Existing code

router.get('/', (req, res) => {
  if (req.session.audioFiles) {
    res.json(req.session.audioFiles);
  } else {
    db.all('SELECT * FROM audiofiles', (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong' });
      }

      req.session.audioFiles = rows;
      res.json(rows);
    });
  }
});

// ... Existing code
```

Now, when you run the Next.js application, you can navigate to the `Display Data` page from the homepage, and it will display the current data from the session database. This approach will fetch the data from the actual database only on the first visit to the `DisplayData` page. Subsequent visits will display the data stored in the session, reducing unnecessary database queries.
