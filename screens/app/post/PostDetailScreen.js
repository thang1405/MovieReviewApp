import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CommentItem from "@components/CommentItem";
import { Avatar } from "react-native-elements";

import firebase from "../../../firebase";
export default class PostDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      content: "",
      behavior: "position",
    };
  }

  handleContent(text) {
    this.setState({ content: text });
  }
  handlePress() {
    const user = firebase.auth().currentUser;
    const postId = this.props.route.params.post.id;
    const { content } = this.state;
    if (content) {
      firebase.database().ref(`posts/${user.uid}/${postId}/comments`).push({
        uid: user.uid,
        name: user.displayName,
        content: content,
      });

      this.setState({
        content: "",
      });
    }
  }

  componentDidMount() {
    const itemRef = firebase.database();
    const user = firebase.auth().currentUser;
    const postId = this.props.route.params.post.id;
    var ref = itemRef.ref(`posts/${user.uid}/${postId}/comments`);
    ref.on("value", (snapshot) => {
      var items = [];
      snapshot.forEach((doc) => {
        items.push({
          id: doc.key,
          name: doc.val().name,
          uid: doc.val().uid,
          content: doc.val().content,
        });
      });
      this.setState({ comments: items });
    });
  }

  render() {
    const { route } = this.props;
    const user = firebase.auth().currentUser;
    console.log("---------");
    console.log(route.params.post);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.container}>
            {/* image film */}
            <View style={styles.image}>
              <ImageBackground
                style={styles.img}
                source={{ uri: route.params.post.imageUrl }}
                resizeMode={"cover"}
              />
            </View>
            {/* title film */}
            <View style={styles.bottom}>
              <View style={styles.infomation}>
                <Text style={styles.title}>{route.params.post.title}</Text>
                <View style={styles.content}>
                  <Text style={styles.contentText}>
                    {route.params.post.content}
                  </Text>
                </View>
                {/* num like and comment  */}
              </View>
              
              <View style={styles.comment_list}>
                <View style={styles.comment}>
                  <View>
                    <Text style={styles.commentText}>Bình luận</Text>
                  </View>
                </View>
              </View>
              {/* comment Input */}
              <View style={styles.commentInput}>
                <View style={styles.avatar}>
                  <Avatar
                    rounded
                    source={{
                      uri: user.photoURL,
                    }}
                    size="small"
                  />
                </View>
                <View style={styles.input}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={"Enter your comment"}
                    placeholderTextColor="#808080"
                    value={this.state.content}
                    onChangeText={this.handleContent.bind(this)}
                    onSubmitEditing={this.handlePress.bind(this)}
                  />
                </View>
              </View>

              {/* flatlist comment */}

              <FlatList
                data={this.state.comments}
                renderItem={({ item }) => <CommentItem CommentItem={item} />}
                keyExtractor={(item) => `${item.id}`}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  image: {
    height: 400,
  },
  img: {
    width: '100%',
    height: 420,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  bottom: {
    padding: 10,
    borderColor: "#F1f1f1",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
  },
  content: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  contentText: {
    fontSize: 16,
  },
  infomation: {
    overflow: "hidden",
  },
  comment_list: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 10,
    marginTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  comment: {
    flexDirection: "row",
    flex: 1,
  },
  commentText: {
    marginTop: 1,
    fontSize: 18,
  },
  commentInput: {
    paddingRight: 15,
    marginTop: 5,
    // paddingLeft: 15,
    flex: 1,
    flexDirection: "row",
  },
  textInput: {
    marginTop: 3,
    padding: 5,
    paddingLeft: 20,
    height: 40,
    fontSize: 16,
  },
  avatar: {
    padding: 7,
    flex: 1,
  },
  input: {
    flex: 8,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 25,
  },
  icon: {
    flex: 1,
    padding: 5,
  },
});

{
  /* <TouchableOpacity
                    onPress={() => {
                      firebase
                        .database()
                        .ref(`posts/${user.uid}`)
                        .child(route.params.post.id)
                        .remove();
                      firebase
                        .database()
                        .ref("postList")
                        .on("value", function (snapshot) {
                          snapshot.forEach(function (childSnapshot) {
                            var key = childSnapshot.key;
                            var postId = childSnapshot.val().postId;
                            if (postId === route.params.post.id) {
                              firebase
                                .database()
                                .ref(`postList/${key}`)
                                .remove();
                            }
                          });
                        });
                      this.props.navigation.navigate("Profile");
                    }}
                  >
                    <Text>Xóa</Text>
                  </TouchableOpacity> */
}
