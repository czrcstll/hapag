import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

const HapagTitle = (navigation) => {
    let image = "/images/Splash Info - 1.png";

    
  const goToNextScreen = () => {
    if(image === "/images/Splash Info - 2.png"){
        image = "/images/Splash Info - 3.png";
    } else if (image === "/images/Splash Info - 3.png"){
        navigation.navigate('GettingStarted');
    } else {
        image = "/images/Splash Info - 2.png";
    }
  }

  return (
    <SafeAreaView style = {styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <CustomButton text="Next" onPress={goToNextScreen} />
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    root: {
      alignItems: 'center',
      padding: 30,
      marginTop: 60,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    }

});
  

export default HapagTitle