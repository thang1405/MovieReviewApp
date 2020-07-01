import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FilmInfoScreen from "./FilmInfoScreen";
import SearchScreen from "./SearchScreen";
import { Ionicons } from "@expo/vector-icons";

const Home = createStackNavigator();
const HomeNavigator = (props) => {
  return (
    <Home.Navigator>
      <Home.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 23,
            color: "#fff",
          },
          headerRight: () => (
            <Ionicons
              name="ios-search"
              size={35}
              color="white"
              backgroundColor="white"
              onPress={()=>props.navigation.navigate("Search")}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: 30,
          },
          headerStyle: {
            backgroundColor: "#000",
            // marginTop:Platform.OS === 'ios' ? 24:0
          },
        }}
      />
      <Home.Screen
        name="FilmInfo"
        component={FilmInfoScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true, //hidden header but show left and right component

          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
            // marginTop:20,
          },
          headerTintColor: "#fff",
        }}
      />
      <Home.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true, //hidden header but show left and right component

          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerTintColor: "#fff",
        }}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
