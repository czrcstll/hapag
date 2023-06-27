import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

const HapagTitle = () => {
  return (
    <ImageBackground
      source={require('.images/splash-title.png')} // Replace with the path to your actual image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Hello, React Native!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' if you want to maintain aspect ratio
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HapagTitle;