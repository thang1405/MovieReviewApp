import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import PostDetailScreen from "../post/PostDetailScreen";
import { Entypo } from "@expo/vector-icons";
import { signOut } from "@actions/index";
import { connect } from "react-redux";
const Profile = createStackNavigator();

class ProfileNavigator extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render(){
  return (
    <Profile.Navigator>
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 23,
            color: "#fff",
          },
          headerRight: () => (
            <Entypo
              name="log-out"
              size={24}
              color="white"
              onPress={() => this.props.signOut()}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
      <Profile.Screen
        name="UserPost"
        component={PostDetailScreen}
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
    </Profile.Navigator>
  );
};
}
export const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, { signOut })(ProfileNavigator);
