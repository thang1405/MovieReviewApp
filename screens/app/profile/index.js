import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './ProfileScreen'
import PostDetailScreen from '../post/PostDetailScreen'
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
      <Profile.Screen
        name="UserPost"
        component={PostDetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true,//hidden header but show left and right component
          headerRightContainerStyle: {
            paddingRight:20
          },
          headerLeftContainerStyle: {
            paddingLeft:10
          },
          headerTintColor:"#fff"
        }}
      />
    </Profile.Navigator>
  )
}

export default ProfileNavigator
