import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
} from "react-native";
import { signOut } from "../../actions/index";
import { connect } from "react-redux";
class Home1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home1 Screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.signOut();
          }}
        >
          <Text>Log Out</Text>
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

export const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, { signOut })(Home1);
