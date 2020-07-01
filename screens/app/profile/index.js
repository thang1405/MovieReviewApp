import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import PostDetailScreen from "../post/PostDetailScreen";
import SettingProfile from "./SettingProfile";
import { Entypo } from "@expo/vector-icons";
import { signOut } from "@actions/index";
import { connect } from "react-redux";
import { View, Alert } from "react-native";
const Profile = createStackNavigator();

class ProfileNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              <View>
                <Entypo
                  name="log-out"
                  size={24}
                  color="white"
                  onPress={() => {
                    Alert.alert(
                      "Đăng xuất",
                      "Bạn muốn đăng xuất ? ",
                      [
                        {
                          text: "Hủy",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        { text: "Xác nhận", onPress: () => this.props.signOut() }
                      ],
                      { cancelable: false }
                    );
                    }}
                />
              </View>
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
          name="Setting"
          component={SettingProfile}
          options={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
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
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerTransparent: true,
            headerTintColor: "#fff",
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
  }
}
export const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, { signOut })(ProfileNavigator);
