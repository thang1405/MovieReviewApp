import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from '@screens/auth/LoginScreen'

const Auth = createStackNavigator()
const INITIAL_ROUTE_NAME = 'Login'

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          header: () => null
        }}
      >
        <Auth.Screen name="Login" component={LoginScreen} />
      </Auth.Navigator>
    </NavigationContainer>
  )
}
