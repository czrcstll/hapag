import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
        <View style = {styles.container} >
            <TextInput
            value = {value}
            onChangeText = {setValue}
            placeholder = {placeholder} style = {styles.input}
            secureTextEntry = {secureTextEntry}/>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',

      backgroundColor: 'white',
      height: 54,
      width: 327,

      borderColor: '#EAEAEF',
      borderWidth: 1,
      borderRadius: 16,

      paddingHorizontal: 30,
      marginVertical: 10,
    },

    input: {

    },
})

export default CustomInput