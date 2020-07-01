import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../../../firebase";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      uploadlink: null,
      title: "",
      content: "",
    };
  }
  //nhập
  handleTitle(text) {
    this.setState({ title: text });
  }
  handleContent(text) {
    this.setState({ content: text });
  }
  handlePress() {
    const user = firebase.auth().currentUser;
    const { title, content, uploadlink } = this.state;
    if (title && content && uploadlink) {
      firebase.database().ref(`posts/${user.uid}`).push({
        imageUrl: uploadlink,
        title: title,
        content: content,
        author: user.displayName,
        comments : []
      }).then((snap)=>{
        const sessionId = new Date().getTime();
        firebase.database().ref(`postList`).push({
          uid:user.uid,
          postId: snap.key,
          time : sessionId
        });
      })
      
      this.props.navigation.navigate("Profile");
      this.setState({
        uploadlink: null,
        title: "",
        content: "",
      })
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
      // if user did not cancel the image picker it should return a uri
      // then upload happens here
      if (!image.cancelled) {
        // upload function
        // this has 3 params (image uri, image height and image width)
        this.setState({ uploadlink: "" });
        this.upload(image.uri, image.height, image.width).then(() => {
          this.setState({ uploadprogress: "done" });
          // get uploaded image firebase link
          this.dispater();
        });
      }

      // if image picker was cancelled
      if (image.cancelled) {
        // alert("you did not select any image");
      }
    }
  };

  // image upload function
  upload = async (uri, h, w) => {
    // function to generate a random int which will be used for image name
    const sessionId = new Date().getTime();
    const imagename = sessionId;

    this.setState({ uri: uri, imagecode: imagename });
    //   getting image uri
    const response = await fetch(uri);

    //   convert it to blob
    const blob = await response.blob();

    //   upload to firebase storage
    var ref = firebase
      .storage()
      .ref()
      .child("image/" + imagename);
    return ref.put(blob);
  };

  // used to get the uploaded image firebase uri
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
        console.log(this.state);
      });
  }

  render() {
    
    return (
      <View style={styles.container}>
        {/* image */}
        <View style={styles.imgPost}>
          <TouchableOpacity onPress={() => this.pic()} style={styles.flexImage}>
            {(() => {
              switch (this.state.uploadlink) {
                case null:
                  return (
                    <Image
                      source={require("../../../assets/icon/add.png")}
                      style={styles.imageAdd}
                    />
                  );
                case "":
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" ,padding:150}}
                    >
                      <ActivityIndicator animating size={'large'}/>
                    </View>
                  );
                default:
                  return (
                    <View>
                      <Image
                        source={{ uri: this.state.uploadlink }}
                        style={styles.imageUpload}
                      />
                    </View>
                  );
              }
            })()}
          </TouchableOpacity>
        </View>
        {/* 2 input */}
        <View style={styles.content}>
          <TextInput
            style={styles.textTitle}
            placeholder={"Title..."}
            value={this.state.title}
            onChangeText={this.handleTitle.bind(this)}
          />
          <TextInput
            style={styles.textCmt}
            placeholder={"Say something..."}
            onSubmitEditing={Keyboard.dismiss}
            multiline={true}
            value={this.state.content}
            onChangeText={this.handleContent.bind(this)}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={"Post"}
            style={styles.btnPost}
            color={"#fff"}
            onPress={this.handlePress.bind(this)}
          ></Button>
        </View>
      </View>
    );
  }
}

export default connect(null, {})(PostScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // marginTop:Platform.OS === 'ios' ? 20:0
  },
  imgPost: {
    flex: 5,
    backgroundColor: "#000",
    alignItems: "center",
    // borderBottomLeftRadius:10,
    // borderBottomRightRadius:10
  },
  uploadImg: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  content: {
    backgroundColor: "#fff",
    flex: 4,
    marginTop: 10,
    borderRadius:20
  },
  textTitle: {
    marginLeft: 31,
    borderBottomColor: "#E3E3E3",
    marginRight: 31,
    padding: 5,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 18,
  },
  textCmt: {
    marginLeft: 31,
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
    marginRight: 31,
    padding: 5,
    height: 100,
    justifyContent: "flex-start",
    fontSize: 18,
  },
  button: {
    width: "60%",
    height: 40,
    marginLeft: "20%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FF001B",
    borderRadius: 25,
    marginBottom: 10,
  },
  btnPost: {
    fontWeight: "bold",
    color: "#FF001B",
  },
  imageAdd: {
    marginTop: 120,
    marginLeft: 45,
  },
  imageUpload: {
    width: 414,
    height: 347,
  },
});
