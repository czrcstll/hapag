<<<<<<< HEAD
import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
=======
import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
>>>>>>> 914cfc1770ae1667e0ee540b2bfb6519db300809
=======
import { TouchableOpacity } from 'react-native-gesture-handler';
>>>>>>> d8db09dd24adddee43dd8b2bac5b6e987504418f

const HapagTitle = () => {

  const navigation = useNavigation();

  const onTap = () => {
    navigation.navigate('SplashInfo');
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <Image source={require("../../../assets/images/Splash_1.png")} resizeMode="cover" style={styles.image} onPress={onTap} />
=======
    <TouchableOpacity onPress={onTap}>
      <Image source={require("../../../assets/images/Splash_1.png")} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
>>>>>>> d8db09dd24adddee43dd8b2bac5b6e987504418f
  )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
  }
});

export default HapagTitle
>>>>>>> 914cfc1770ae1667e0ee540b2bfb6519db300809
