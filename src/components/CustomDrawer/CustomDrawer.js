import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS } from '../../constants';

const CustomDrawer = (props) => {
  return (
    <View style ={{flex: 1}}>
        <DrawerContentScrollView {...props} contentContainerStyle = {{backgroundColor: COLORS.violet }}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>

  )
}

export default CustomDrawer