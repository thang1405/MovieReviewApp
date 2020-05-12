import React from 'react'
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setTabBarVisit } from '@actions/index'

import HomeScreen from '@screens/app/HomeScreen'
import ProfileScreen from '@screens/app/ProfileScreen'
import { useFocusEffect } from '@react-navigation/native';

const Stack = createStackNavigator();
const a = ({ setTabBarVisit }) => {
  useFocusEffect(() => {
    setTabBarVisit(false)
    return () => {
      setTabBarVisit(true)
    }
  })
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Parent" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
const ProfileNavigator = connect(null, { setTabBarVisit })(a)

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}
      />
    </Drawer.Navigator>
  );
}

export default connect(null, { setTabBarVisit })(DrawerNavigator)
