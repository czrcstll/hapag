import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, SafeAreaView, ImageBackground } from 'react-native-gesture-handler'

const EducationHubScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
      source={require('../assets/placeholder/education-hub-placeholder.png')}
      style={styles.imageBackground}
    />
      {/* Your other components */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default EducationHubScreen