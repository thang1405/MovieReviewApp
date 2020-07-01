import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import Login from "../screens/auth/Login";
// import Signup from "../screens/auth/Signup";

import SignInScreen from "@screens/auth/SignInScreen";
import SignUpScreen from "@screens/auth/SignUpScreen";

const Auth = createStackNavigator();
const INITIAL_ROUTE_NAME = "SignIn";

export default function AuthNavigator() {
  return (

    <NavigationContainer>
      <Auth.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}

      >
        <Auth.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerTitle: null, headerTransparent: true }}
        />
        <Auth.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: null,
            headerTransparent: true,
            headerLeftContainerStyle: {
              paddingLeft:10
            },
            headerTintColor:"#fff"
          }}
        />
      </Auth.Navigator>
    </NavigationContainer>
  );
}
