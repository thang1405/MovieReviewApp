import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "./NewsScreen";
import NewsDetailScreen from "../post/NewsDetailScreen";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import { View } from "react-native";
const New = createStackNavigator();

class NewNavigator extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render(){
  return (
    <New.Navigator>
      <New.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 23,
            color: "#fff",
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
      <New.Screen
        name="UserPost"
        component={NewsDetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: null,
          headerTransparent: true, //hidden header but show left and right component
          headerRightContainerStyle: {
            paddingRight: 20,
          },

          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerTintColor: "#fff",
        }}
      />
    </New.Navigator>
  );
};
}
export const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, { })(NewNavigator);
