import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

const HapagTitle = () => {
  return (
    <SafeAreaView style = {styles.root}>
      <ImageBackground source={"/images/Splash 1.png"} resizeMode="cover" style={styles.image}/>
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