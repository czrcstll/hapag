import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HapagTitle = () => {

  const navigation = useNavigation();

  const onTap = () => {
    navigation.navigate('SplashInfo');
  }

  return (
    <Image source={require("../../../assets/images/Splash_1.png")} resizeMode="cover" style={styles.image} onPress={onTap} />
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
