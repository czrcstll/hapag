import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS } from '../../constants';

const CustomDrawer = (props) => {
  return (
    <View style ={{flex: 1}}>
        <DrawerContentScrollView {...props} >
            <View style = {{backgroundColor: COLORS.violet, padding: 30}}>
                <Text>Juan Antonio </Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View style = {{padding: 20, marginBottom: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <Text style = {{fontSize: 16}}>Logout</Text>
        </View>
    </View>

  )
}

export default CustomDrawer