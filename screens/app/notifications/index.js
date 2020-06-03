import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from './NotificationScreen'

const Noti = createStackNavigator()

const NotiNavigator = () => {
  return (
    <Noti.Navigator>
      <Noti.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTitleAlign:'left',
          headerTitleStyle:{
            fontSize:23,
            color:"#fff"
          },
          headerStyle:{
            backgroundColor:"#000",
            marginTop:Platform.OS === 'ios' ? 24:0,
            paddingLeft:10
          }
        }}
      />
    </Noti.Navigator>
  )
}

export default NotiNavigator
