import React from 'react'
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import TabBarIcon from '@components/TabBarIcon'

import NotificationScreen from '@screens/app/noti/index'
//import ListScreen from '@screens/app/note/index'

import ListScreen from '@screens/app/ListScreen'
import UserScreen from '@screens/app/UserScreen'
import HomeScreen from '@screens/app/home/index'
const App = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

const AppNavigator = ({ state }) => {
  const tabBarStatus = state.app.tabBarVisit
  return (
    <NavigationContainer>
      <App.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          header:() => null
        }}
        tabBarOptions={{
          inactiveBackgroundColor:'#000',
          activeBackgroundColor:'#000',
          style:{
            backgroundColor:'#000',
            borderRadius:10,
          },
          showLabel:false
        }}
      >
        <App.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            ),
            //tabBarVisible: tabBarStatus
          }}
        />
        <App.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'Favorites list',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-list-box" />
            )
          }}
        />
        <App.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'Notification',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-notifications" />
            )
          }}
        />
        <App.Screen
          name="User"
          component={UserScreen}
          options={{
            //title: $t('screens.user.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person" />
            )
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  )
}
const mapState = state => ({ state })
export default connect(mapState, null)(AppNavigator)
