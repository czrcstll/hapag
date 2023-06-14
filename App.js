import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  NavigationContainer
} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <Navigation/>
    </SafeAreaView>
    )
}
//For styling the components
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },

  wrapper: {
    flex: 1
  },

  
});

export default App 