import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import FilmInfoScreen from './FilmInfoScreen'
import { AntDesign } from '@expo/vector-icons'
import {Platform} from 'react-native'


const Home = createStackNavigator()
const HomeNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:23,
          color:"#fff"
        },
        headerStyle:{
          backgroundColor:"#000",
          // marginTop:Platform.OS === 'ios' ? 24:0
        }
      }} 
      />
      <Home.Screen
        name="FilmInfo"
        component={FilmInfoScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true,//hidden header but show left and right component
          // headerRight: () => (
          //   <AntDesign
          //     name="hearto"
          //     size={24}
          //     color="red"
          //     onPress={() => alert('OK!!!!')}
          //   />
          // ),
          headerRightContainerStyle: {
            paddingRight:20
          },
          headerLeftContainerStyle: {
            paddingLeft:10
          },
          headerTintColor:"#fff"
        }}
      />
    </Home.Navigator>
  )
}

export default HomeNavigator
