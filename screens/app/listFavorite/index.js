import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from './ListScreen'
import FilmInfoScreen from '@screens/app/home/FilmInfoScreen'
const List = createStackNavigator()

const ListNavigator = () => {
  return (
    <List.Navigator>
      <List.Screen
        name="Favorites list"
        component={ListScreen}
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
      <List.Screen
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
    </List.Navigator>
  )
}

export default ListNavigator
