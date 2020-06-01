import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '@screens/app/home/index'
import SignInScreen from '@screens/auth/SignInScreen'
import SignUpScreen from '@screens/auth/SignUpScreen'

const Auth = createStackNavigator()
const INITIAL_ROUTE_NAME = 'SignIn'

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          header: () => null
        }}
      >
        
        <Auth.Screen name="SignIn" component={SignInScreen}/>
        <Auth.Screen name="SignUp" component={SignUpScreen}/>
      </Auth.Navigator>
    </NavigationContainer>
  )
}
