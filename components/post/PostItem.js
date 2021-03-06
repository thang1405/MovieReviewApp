import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function PostItem(props) {
  const { postItem, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {/* image film */}
        <ImageBackground
          source={{ uri: postItem.imageUrl }}
          style={styles.img}
          imageStyle={{ borderRadius: 5 }}
          resizeMode={"cover"}
        ></ImageBackground>
        {/* info film */}
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{postItem.title}</Text>
          </View>
          {/* num like and comment  */}
          <View style={styles.info}>
            <View style={styles.like}>
              <View>
                <Text style={styles.likeText}> {postItem.author}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: "#0b0b0b",
    borderRadius: 5,
  },
  img: {
    width: 384,
    height: 210,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  content: {
    marginTop: 15,
    marginLeft: 10,
    paddingBottom: 10,
  },

  title: {
    marginBottom: 5,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 18,
    color: "#fff",
  },
  info: {
    flexDirection: "row",

    flex: 1,
  },
  comment: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  commentText: {
    color: "#f4f4f4",
    marginLeft: 10,
    marginTop: 4,
  },
  like: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  likeText: {
    color: "#f4f4f4",
    fontSize:14,
    justifyContent: "flex-end",
    marginLeft: 10,
    marginTop: 4,
  },
});
