import AppStackNavigator from './src/navigations/AppStackNavigator';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigations/AuthNavigator';

const App = () => {
  return (
  <AuthNavigator/>
  );
};

export default App;
