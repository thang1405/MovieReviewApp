import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import CommentItem from "@components/CommentItem";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import ReadMore from "react-native-read-more-text";
import axios from "axios";
import Colors from "@constants/Colors";

import firebase from "../../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
export default class FilmInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      comments: [],
      content: "",
      isFavorite: false,
      exists: false,
    };
  }

  handleContent(text) {
    this.setState({ content: text });
  }
  handlePress() {
    const user = firebase.auth().currentUser;
    const { content } = this.state;
    if (content) {
      firebase
        .database()
        .ref(`films/${this.props.route.params.filmID}/comments`)
        .push({
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
    const { route } = this.props;
    let user = firebase.auth().currentUser;
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&i=" + route.params.filmID).then(({ data }) => {
      let result = data;
      // console.log(result);
      this.setState({ film: result });
      var ref = firebase.database().ref(`films/${result.imdbID}`);
      ref.child("comments").on("value", (snapshot) => {
        var items = [];
        snapshot.forEach((doc) => {
          items.push({
            id: doc.key,
            name: doc.val().name,
            uid: doc.val().uid,
            content: doc.val().content,
          });
        });
        this.setState({
          comments: items,
        });
      });

      firebase
        .database()
        .ref(`listFavorite/${user.uid}/${result.imdbID}`)
        .on("value", (snapshot) => {
          if (snapshot.exists()) {
            this.setState({
              isFavorite: snapshot.val().isFavorite,
            });
          } else {
            this.setState({
              isFavorite: false,
            });
          }
        });
    });
  }
  changeFavorite = (isFav) => {
    let user = firebase.auth().currentUser;
    this.setState({ isFavorite: !isFav });
    firebase
      .database()
      .ref(`listFavorite/${user.uid}/${this.state.film.imdbID}`)
      .update({
        isFavorite: !isFav,
      });
  };
  render() {
    const user = firebase.auth().currentUser;
    const { film, comments, isFavorite } = this.state;
    // console.log(this.state);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.container}>
          {/* image film */}
          <View style={styles.image}>
            <ImageBackground
              style={styles.img}
              source={{ uri: film.Poster }}
              resizeMode={"cover"}
            >
              <View style={styles.imageIcon}>
                <AntDesign
                  name={isFavorite ? "heart" : "hearto"}
                  size={32}
                  color={isFavorite ? Colors.red : Colors.white}
                  onPress={() => this.changeFavorite(isFavorite)}
                />
              </View>
            </ImageBackground>
          </View>
          {/* title film */}
          <View style={styles.bottom}>
            <View style={styles.infomation}>
              <Text style={styles.title}>{film.Title}</Text>

              <View style={styles.content}>
                <ReadMore
                  numberOfLines={4}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                  onReady={this._handleTextReady}
                >
                  <Text style={styles.contentText}>{film.Plot}</Text>
                </ReadMore>
                <View style={styles.orther}>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Thể loại </Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text
                        style={styles.infoText}
                        ellipsizeMode="tail"
                        numberOfLines={3}
                      >
                        {film.Genre}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Imdb</Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text style={styles.infoText}>{film.imdbRating}</Text>
                    </View>
                  </View>

                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Thời lượng</Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text style={styles.infoText}>{film.Runtime}</Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Đạo diễn </Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text style={styles.infoText}>{film.Director}</Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Diễn viên </Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text
                        style={styles.infoText}
                        ellipsizeMode="tail"
                        numberOfLines={3}
                      >
                        {film.Actors}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Quốc gia </Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text style={styles.infoText}>{film.Country}</Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTitle}>
                      <Text style={styles.infoText}>Phát hành </Text>
                    </View>
                    <View style={styles.infoContent}>
                      <Text style={styles.infoText}>{film.Year}</Text>
                    </View>
                  </View>
                </View>
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
              data={comments}
              renderItem={({ item }) => <CommentItem CommentItem={item} />}
              keyExtractor={(item) => `${item.id}`}
            />
            {/* comment Input */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: "gray", marginTop: 5 }} onPress={handlePress}>
        Xem Thêm ...
      </Text>
    );
  };

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: "gray", marginTop: 5 }} onPress={handlePress}>
        Thu nhỏ
      </Text>
    );
  };

  _handleTextReady = () => {
    // ...
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  image: {
    height: 430,
  },
  img: {
    width: "100%",
    height: 450,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  imageIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingTop: 27,
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
    paddingTop:5,
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
  info: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
  },
  infoTitle: {
    flex: 3,
  },
  infoContent: {
    flex: 7,
  },
  infoText: {
    fontSize: 16,
  },
  orther: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
});
