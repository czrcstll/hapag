import AppStackNavigator from './src/navigations/AppStackNavigator';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigations/AuthNavigator';
import * as db from './src/database/Database';

const App = () => {

  // db.default.dropAllTables()
  // .then((result) => {
  //   console.log(result);
  //   // Database opened or created successfully, perform further operations
  // })
  // .catch((error) => {
  //   console.error(error);
  //   // Failed to open or create the database, handle the error
  // });

  // db.default.createTables()
  // .then((result) => {
  //   console.log(result);
  //   // Database opened or created successfully, perform further operations
  // })
  // .catch((error) => {
  //   console.error(error);
  //   // Failed to open or create the database, handle the error
  // });

  // db.default.getAllTables()
  // .then((result) => {
  //   console.log(result);
  //   // Database opened or created successfully, perform further operations
  // })
  // .catch((error) => {
  //   console.error(error);
  //   // Failed to open or create the database, handle the error
  // });

  return (
  <AuthNavigator/>
  );
};

export default App;
