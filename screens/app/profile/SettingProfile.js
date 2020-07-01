import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import firebase from "../../../firebase";
import Colors from '@constants/Colors'
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      uploadlink: null,
      password: "",
      passwordAgain: "",
    };
  }
  //nhập
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
  handlePasswordAgain(text) {
    let regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
    if (text.match(regexp) === null) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ passwordAgain: text });
  }
  handlePress() {
    const user = firebase.auth().currentUser;
    const { password, passwordAgain, uploadlink, error } = this.state;
    if (uploadlink  && password === passwordAgain && password === '') {
      user
        .updateProfile({
          photoURL: uploadlink,
        })
        .then(function () {
          firebase.database().ref(`users/${user.uid}`).update({
            photoURL: uploadlink,
          });
          console.log("update profile ok");
        })
        .catch(function (error) {
          console.log("update profile fail");
        });

      this.props.navigation.navigate("Profile");
      this.setState({
        uploadlink: null,
        password: "",
        passwordAgain: "",
      });
    } else if (!error && password === passwordAgain && password !=='') {
      user
        .updatePassword(password)
        .then(function () {
          // alert("update pass ok");
          
        })
        ;
        this.props.navigation.navigate("Profile");
    } else {
      alert("Nhập lại mật khẩu");
      console.log("none");
      console.log(this.state);
    }
  }

  //camera permision & upload
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  pic = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    if (status === "granted") {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!image.cancelled) {
        this.setState({ uploadlink: "" });
        this.upload(image.uri, image.height, image.width).then(() => {
          this.setState({ uploadprogress: "done" });
          this.dispater();
        });
      }

      if (image.cancelled) {
        // alert("you did not select any image");
      }
    }
  };

  // image upload function
  upload = async (uri, h, w) => {
    const sessionId = new Date().getTime();
    const imagename = sessionId;

    this.setState({ uri: uri, imagecode: imagename });

    const response = await fetch(uri);

    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("image/" + imagename);
    return ref.put(blob);
  };
  async dispater() {
    const { imagecode } = this.state;
    firebase
      .storage()
      .ref()
      .child("image/" + imagecode)
      .getDownloadURL()
      .then((url) => {
        const uploadlink = url;
        this.setState({ uploadlink });
      });
  }

  render() {
    const user = firebase.auth().currentUser;
    console.log(this.state);
    return (
      <View style={styles.container}>
        {/* image */}
        <View style={styles.top}></View>
        <View style={styles.position}>
          <TouchableOpacity onPress={() => this.pic()} activeOpacity={0.98}>
            {(() => {
              switch (this.state.uploadlink) {
                case null:
                  return (
                    <View
                      style={{
                        backgroundColor: "#fff",
                        width: 152,
                        height: 152,
                        borderRadius: 76,
                        borderWidth: 1,
                        borderColor: "#fff",
                      }}
                    >
                      <Avatar
                        rounded
                        source={{ uri: user.photoURL }}
                        size="xlarge"
                      />
                    </View>
                  );
                case "":
                  return (
                    <View
                      style={{
                        padding: 55,
                        backgroundColor: "#fff",
                        width: 149,
                        height: 149,
                        borderRadius: 75,
                        borderWidth: 1,
                        borderColor: "#fff",
                      }}
                    >
                      <ActivityIndicator animating size={"large"} />
                    </View>
                  );
                default:
                  return (
                    <View>
                      <Avatar
                        rounded
                        source={{ uri: this.state.uploadlink }}
                        size="xlarge"
                      />
                    </View>
                  );
              }
            })()}
          </TouchableOpacity>
          <Text style={styles.username}>{user.displayName}</Text>
          <Text style={styles.email}>Email : {user.email}</Text>
        </View>
        {/* 2 input */}
        <View style={styles.content}>
          <TextInput
            style={styles.textTitle}
            placeholder={"Nhập mật khẩu mới"}
            value={this.state.password}
            secureTextEntry={true}
            returnKeyType="next"
            accessibilityLabel="password"
            onChangeText={this.handlePassword.bind(this)}
          />
          <TextInput
            style={styles.textTitle}
            placeholder={"Nhập lại mật khẩu mới"}
            value={this.state.passwordAgain}
            secureTextEntry={true}
            returnKeyType="next"
            accessibilityLabel="password"
            onChangeText={this.handlePasswordAgain.bind(this)}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={"Cập nhật"}
            style={styles.btnPost}
            color={"#fff"}
            onPress={this.handlePress.bind(this)}
          ></Button>
        </View>
      </View>
    );
  }
}

export default connect(null, {})(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    backgroundColor: "#fff",
    flex: 4,
    marginTop: 10,
    // borderRadius:20
  },
  textTitle: {
    marginLeft: 31,
    borderColor: "#E3E3E3",
    marginRight: 31,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    fontSize: 18,
    marginTop: 10,
  },

  button: {
    width: "60%",
    height: 40,
    marginLeft: "20%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.red,
    borderRadius: 25,
    marginBottom: 10,
  },
  btnPost: {
    fontWeight: "bold",
    color: "#fff",
  },
  top: {
    height: 150,
    backgroundColor: "#111111",
  },
  bottom: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  position: {
    alignItems: "center",
    position: "relative",
    top: -80,
  },
  username: {
    fontSize: 20,
  },
  email: {
    fontSize: 17,
  },
});
