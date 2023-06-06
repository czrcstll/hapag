import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress = {onPress} style = {[styles.container, styles[`container_${type}`]]} >
      <Text style = {[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,

        height: 54,
        width: 327,
        borderRadius: 16
    },

    text:{
        fontSize: 16,
    },

    //Customization of other types of button

    //1
    container_PRIMARY: {
        backgroundColor: '#50269D',
    },

    text_PRIMARY: {
        color: '#F6A43E',
    },

    //2
    container_SECONDARY: {
        
    },

    text_SECONDARY:{
        color: '#8E8EA9',
    },

    //3
    container_TERTIARY: {
        borderWidth: 2,
        borderColor: '#8E8EA9'

    },    

    text_TERTIARY:{
        color: '#44AF69',
    },

})

export default CustomButton