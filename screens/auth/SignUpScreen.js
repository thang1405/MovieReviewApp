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
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
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
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ email: text });
  }

  handlePassword(text) {
    let regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
    if (text.match(regexp) === null) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ password: text });
  }

  handlePress() {
    const {
      email,
      error,
      displayName,
      password,
    } = this.state;
    if (!error) {
      this.props.createUser(email, password, displayName);
      console.log('ok');
      console.log(this.state);
      this.props.navigation.navigate("SignIn");
    } else {
      alert(
        "Email sai và mật khẩu tối thiểu tám ký tự, mật khẩu cần ít nhất một chữ cái và một số "
      );
      console.log('none');
      console.log(this.state);
    } 
  }
  render() {
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
              <Text style={styles.textScreen}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your email"}
                placeholderTextColor={"white"}
                keyboardType="email-address"
                returnKeyType="next"
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
                returnKeyType="next"
                secureTextEntry={true}
                accessibilityLabel="password"
                onChangeText={this.handlePassword.bind(this)}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={[styles.footer, { alignItems: "center" }]}>
              <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                opacity={0.9}
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
    marginTop: 40,
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
