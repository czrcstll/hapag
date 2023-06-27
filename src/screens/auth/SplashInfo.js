import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HapagTitle = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState(require("../../../assets/images/SplashInfo1.png"));

  const onTap = () => {
    if (image === require("../../../assets/images/SplashInfo2.png")) {
      setImage(require("../../../assets/images/SplashInfo3.png"));
    } else if (image === require("../../../assets/images/SplashInfo3.png")) {
      navigation.navigate('GettingStarted');
    } else {
      setImage(require("../../../assets/images/SplashInfo2.png"));
    }
  }

  return (
    <TouchableOpacity onPress={onTap}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
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