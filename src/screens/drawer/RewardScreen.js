import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const RewardScreen = () => {
  return (
    <SafeAreaView>
      <Image source={require('../../../assets/placeholder/rewards-placeholder.png')} style={styles.image} resizeMode="cover"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default RewardScreen