import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import bgImage from "@assets/images/background.png";
import { connect } from "react-redux";
import { loginUser,loginFacebook } from "@actions/index";
import firebase from "../../firebase";
// import {signInWithFacebook} from '../../util/auth'
import * as Facebook from 'expo-facebook'; 
class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user);
      }
    });
  }

  handleEmail(text) {
    this.setState({ email: text });
  }
  handlePassword(text) {
    this.setState({ password: text });
  }
  handlePress() {
    const { email, password } = this.state;
    if (password && email) {
      this.props.loginUser(email, password);
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.logo}>Sign in</Text>
        </View>

        <View style={styles.box}>
          <View stype={styles.inputView}>
            <Text style={styles.textScreen}>User name</Text>
            <TextInput
              style={styles.input}
              ref="email"
              placeholder={"Enter your user name"}
              placeholderTextColor="#fff"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              accessibilityLabel="email"
              onChangeText={this.handleEmail.bind(this)}
            />
          </View>

          <View stype={styles.inputView}>
            <Text style={styles.textScreen}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your password"}
              placeholderTextColor={"white"}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              accessibilityLabel="password"
              onChangeText={this.handlePassword.bind(this)}
            />
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this.handlePress.bind(this)}
              style={[styles.loginBtn, { backgroundColor: "#fb5b5a" ,marginTop:40}]}
            >
              <Text style={styles.loginText}>Sign in</Text>
            </TouchableOpacity>

            {/* <Text
              style={[styles.loginText, { fontSize: 14, textAlign: "center" }]}
            >
              or
            </Text> */}

            {/* <TouchableOpacity
              activeOpacity={0.9}
              // onPress={loginFacebook}
              style={[styles.loginBtn, { backgroundColor: "white" }]}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("@assets/images/iconfb.png")}
                  style={{ width: 20, height: 20, marginHorizontal: 10 }}
                ></Image>
                <Text style={{ color: "blue" }}>with Facebook</Text>
              </View>
            </TouchableOpacity> */}
          </View>

          <View style={styles.footer}>
            <Text style={styles.loginText}>Don't have an account?</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={{ marginLeft: 40, color: "#FF0000" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { loginUser,loginFacebook })(SignInScreen);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  textScreen: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    marginTop: 15,
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20,
  },
  input: {
    fontSize: 13,
    height: 40,
    color: "white",
    paddingHorizontal: 5,
    borderBottomColor: "#FFFFFF",
    opacity: 0.9,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  forgot: {
    textAlign: "right",
    color: "white",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 30,
    marginRight: 20,
  },
  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
