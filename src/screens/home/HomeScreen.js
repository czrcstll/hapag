import React from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
              <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Ionicons name="ios-menu" size={30} color="#4A4A6A" />
              </View>
              <Text>Plan your meal today</Text>
              <Text>Search Bar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen