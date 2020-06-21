import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import bgImage from "@assets/images/background.png";

import { connect } from "react-redux";
import { createUser } from "@actions/index";
class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: "",
      password: "",
    };
  }

  handleName(text) {
    let regexp = /^[a-zA-Z_.-_--]+/;
    if (text.match(regexp) === null || text.length < 2) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ displayName: text });
  }

  handleEmail(text) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (text.match(regexp) === null) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }
    this.setState({ email: text });
  }

  handlePassword(text) {
    let regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
    if (text.match(regexp) === null) {
      this.setState({ errorPassword: true });
    } else {
      this.setState({ errorPassword: false });
    }
    this.setState({ password: text });
  }

  handlePress() {
    const { email, errorPassword, errorEmail,displayName, password } = this.state;
    if (!errorPassword || !errorEmail) {
      this.props.createUser(email, password,displayName);
    }
    if (errorPassword && errorEmail) {
      alert(
        "Email sai và mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số "
      );
    } else if (errorEmail) {
      alert("Nhập Email sai");
    } else if (errorPassword) {
      alert("Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số ");
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView
          behavior="paddings"
          style={styles.backgroundContainer}
        >
          <View style={styles.header}>
            <Text style={styles.logo}>Sign up</Text>
          </View>

          <View style={styles.box}>
            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your email"}
                placeholderTextColor={"white"}
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                accessibilityLabel="email"
                onChangeText={this.handleEmail.bind(this)}
                underlineColorAndroid="transparent"
              />
            </View>

            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>User name</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your user name"}
                placeholderTextColor="#fff"
                ref="displayName"
                autoCapitalize="words"
                accessibilityLabel="displayName"
                onChangeText={this.handleName.bind(this)}
              />
            </View>

            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your password"}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                returnKeyType="next"
                secureTextEntry={true}
                accessibilityLabel="password"
                onChangeText={this.handlePassword.bind(this)}
                underlineColorAndroid="transparent"
              />
            </View>

            <View
              style={[
                styles.footer,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                opacity={0.5}
                style={[styles.loginBtn, { backgroundColor: "#fb5b5a" }]}
              >
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { createUser })(SignupScreen);

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
    flex: 4,
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
    opacity: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: "white",
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
