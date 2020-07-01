import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import PostItem from "@components/post/PostItem";
import { Avatar } from "react-native-elements";
import firebase from "../../../firebase";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      photo: "",
    };
  }

  componentDidMount() {
    const itemRef = firebase.database();
    const user = firebase.auth().currentUser;
    itemRef.ref(`users/${user.uid}`).on("value", (snapshot) => {
      this.setState({
        photo: snapshot.val().photoURL,
      });
    });
    var ref = itemRef.ref(`posts/${user.uid}`);
    ref.on("value", (snapshot) => {
      var items = [];
      snapshot.forEach((doc) => {
        items.push({
          id: doc.key,
          imageUrl: doc.val().imageUrl,
          title: doc.val().title,
          content: doc.val().content,
          // author: doc.val().author,
          comments: doc.comments,
        });
      });
      this.setState({ posts: items });
    });
  }

  render() {
    const { navigation } = this.props;
    const { posts } = this.state;
    var user = firebase.auth().currentUser;
    // console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.position}>
            <View
              style={{
                backgroundColor: "#111111",
                width: 152,
                height: 152,
                borderRadius: 76,
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <Avatar
                rounded
                source={{
                  uri: this.state.photo,
                }}
                size="xlarge"
              />
            </View>
            <Text style={styles.username}>{user.displayName}</Text>
            <Text style={styles.email}>Email : {user.email}</Text>
            <TouchableOpacity
              style={styles.settingView}
              onPress={() => {
                this.props.navigation.navigate({
                  name: "Setting",
                  params: { Avatar: user.photoURL },
                });
              }}
            >
              <Text style={styles.setting}>Chỉnh sửa thông tin cá nhân</Text>
            </TouchableOpacity>
            <View style={styles.yourPostTitle}>
              <Text style={styles.yourPost}>Bài đăng của bạn</Text>
            </View>
          </View>
          {/* list post */}
          <View style={styles.postList}>
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <PostItem
                  postItem={item}
                  onPress={() => {
                    navigation.navigate({
                      name: "UserPost",
                      params: { post: item },
                    });
                  }}
                />
              )}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
  },
  top: {
    height: 120,
    backgroundColor: "#111111",
  },
  bottom: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    minHeight: 500,
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
  setting: {
    padding: 5,
    paddingHorizontal: 25,
    fontSize: 17,
  },
  settingView: {
    margin: 15,
    borderColor: "#1b1b1b",
    borderRadius: 20,
    borderWidth: 1,
  },
  yourPost: {
    fontSize: 20,
    padding:10,
    paddingHorizontal:120
  },
  yourPostTitle:{
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
  postList:{
    marginTop:-50
  }
});
