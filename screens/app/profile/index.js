import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './ProfileScreen'
const Profile = createStackNavigator()

const ProfileNavigator = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign:'left',
          headerTitleStyle:{
            fontSize:23,
            color:"#fff"
          },
          headerStyle:{
            backgroundColor:"#000",
            paddingLeft:10
          }
        }}
      />
      
    </Profile.Navigator>
  )
}

export default ProfileNavigator
