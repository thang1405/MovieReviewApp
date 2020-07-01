import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import PostItem from "@components/post/PostItem";
import { Avatar } from "react-native-elements";
import firebase from "../../../firebase";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
    };
  }

  componentDidMount() {
    const itemRef = firebase.database();
    var ref = itemRef.ref(`postList`);
    ref.on("value", (snapshot) => {
      var items = [];
      snapshot.forEach((doc) => {
        itemRef
          .ref(`posts/${doc.val().uid}/${doc.val().postId}`)
          .on("value", (snap) => {
            items.push({
              id: snap.key,//postId
              imageUrl: snap.val().imageUrl,
              title: snap.val().title,
              content: snap.val().content,
              author: snap.val().author,
              comments: snap.comments,
            });
          });
      });
      this.setState({ postsList: items });
    });
  }

  render() {
    const { navigation } = this.props;
    const { postsList } = this.state;
    // console.log(postsList);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bottom}>
            {/* list post */}
            <View style={styles.postList}>
              <FlatList
                data={postsList}
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  top: {
    height: 120,
    backgroundColor: "#111111",
  },
  bottom: {},
  position: {
    alignItems: "center",
    position: "relative",
    top: -80,
  },
  username: {
    fontSize: 18,
  },
  email: {
    fontSize: 15,
  },
});
