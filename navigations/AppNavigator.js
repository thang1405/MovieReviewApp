import React from 'react'
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import TabBarIcon from '@components/TabBarIcon'
import TabBarAnt from '@components/TabBarAnt'
import NotificationScreen from '@screens/app/notifications/index'

import ListScreen from '@screens/app/listFavorite/index'
import ProfileScreen from '@screens/app/profile/index'
import HomeScreen from '@screens/app/home/index'
import PostScreen from '@screens/app/PostScreen'

const App = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

const AppNavigator = ({ state }) => {
  const tabBarStatus = state.app.tabBarVisit
  return (
    <NavigationContainer>
      <App.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          header: () => null,
        }}
        tabBarOptions={{
          inactiveBackgroundColor: '#000',
          activeBackgroundColor: '#000',
          showLabel: false,
        }}
      >
        <App.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <TabBarAnt focused={focused} name="home" />
            ),
            // tabBarVisible: tabBarStatus
          }}
        />

        <App.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'Notification',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-notifications" />
            ),
            
          }}
        />
        <App.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: 'Post',
            tabBarIcon: ({ focused }) => (
              <TabBarAnt focused={focused} name="pluscircle" />
            ),
          }}
        />

        <App.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            //title: $t('screens.user.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person" />
            ),
          }}
        />
        <App.Screen
          name="List"
          component={ListScreen}
          options={{
            title: 'Favorites list',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-heart-empty" />
            ),
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  )
}
const mapState = (state) => ({ state })
export default connect(mapState, null)(AppNavigator)
