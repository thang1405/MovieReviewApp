import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  Button,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import firebase from "../../firebase";
export default class Home extends React.Component {
  render() {
    var user = firebase.auth().currentUser;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>
           email : {user.email}
        </Text>
        <Text>userId :{user.uid}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Home1");
          }}
        >
          <Text>Home 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
