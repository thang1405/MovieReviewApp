import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import TabBarIcon from '@components/TabBarIcon'
import TabBarAnt from '@components/TabBarAnt'
import TabBarFont from '@components/TabBarFont'
import NewsScreen from '@screens/app/news/index'

import ListScreen from '@screens/app/listFavorite/index'
import ProfileScreen from '@screens/app/profile/index'
import HomeScreen from '@screens/app/home/index'
import PostScreen from '@screens/app/post/PostScreen'

const App = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = "Home";

export default function AppNavigator (){
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
          }}
        />

        <App.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: 'news',
            tabBarIcon: ({ focused }) => (
              <TabBarFont focused={focused} name="new-box" />
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
  );
};

