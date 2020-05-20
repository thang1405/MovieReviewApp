import React from 'react'
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import TabBarIcon from '@components/TabBarIcon'

import NotificationScreen from '@screens/app/NotificationScreen'
//import ListScreen from '@screens/app/note/ListScreen'
import ListScreen from '@screens/app/ListScreen'
import UserScreen from '@screens/app/UserScreen'
import DrawerNavigate from '@navigations/DrawerNavigator'
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
          header:() => null
        }}
      >
        <App.Screen
          name="Home"
          component={DrawerNavigate}
          options={{
            title: $t('screens.home.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            ),
            tabBarVisible: tabBarStatus
          }}
        />
        <App.Screen
          name="List"
          component={ListScreen}
          options={{
            title: $t('screens.list.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-list-box" />
            )
          }}
        />
        <App.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: $t('screens.notification.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-notifications" />
            )
          }}
        />
        <App.Screen
          name="User"
          component={UserScreen}
          options={{
            title: $t('screens.user.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person" />
            )
          }}
        />
        <App.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: $t('screens.post.title'),
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
