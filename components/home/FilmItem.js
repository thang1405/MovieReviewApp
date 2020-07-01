import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@constants/Colors";
import axios from "axios";
import firebase from "../../firebase";
export default class FilmItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      id: props.filmItem.id,
      isFavorite: false
    };
  }
  componentDidMount() {
    const { filmItem, onPress } = this.props;
    let user = firebase.auth().currentUser;
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&i=" + this.state.id).then(({ data }) => {
      let result = data;
      // console.log(result);
      this.setState({ film: result });
      firebase
        .database()
        .ref(`listFavorite/${user.uid}/${filmItem.id}`)
        .on("value", (snapshot) => {
          if(snapshot.exists()){
            this.setState({
              isFavorite: snapshot.val().isFavorite,
            });
          }else{
            this.setState({
              isFavorite: false,
            });
          }
        });
    });
    // console.log(this.state.id);
    
  }

  render() {
    const { onPress } = this.props;
    const { film ,isFavorite} = this.state; //thông tin từ api
    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={styles.container}
          activeOpacity={0.7}
        >
          {/* image film */}
          <View style={styles.image}>
            <ImageBackground
              source={{ uri: film.Poster }}
              style={styles.img}
              imageStyle={{ borderRadius: 5 }}
              resizeMode={"cover"}
            >
              <View style={styles.imageIcon}>
                <AntDesign
                  name={isFavorite ? "heart" : "hearto"}
                  size={24}
                  color={isFavorite ? Colors.red : Colors.white}
                />
              </View>
            </ImageBackground>
          </View>
          {/* film title */}
          <View style={styles.content}>
            <View style={styles.title}>
              <Text
                style={styles.titleText}
                ellipsizeMode="tail"
                numberOfLines={3}
              >
                {film.Title}
              </Text>
              <Text style={styles.yearText}>({film.Year})</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: "#0b0b0b",
    borderRadius: 5,
    flexDirection: "row",
  },
  image: {
    flex: 4,
  },
  img: {
    width: 150,
    height: 225,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imageIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingTop: 5,
  },
  content: {
    flex: 6,
    marginTop: 10,
    marginLeft: 10,
    paddingBottom: 10,
  },
  title: {
    marginBottom: 5,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 21,
    color: "#fff",
  },
  yearText: {
    fontSize: 18,
    color: "#fff",
  },
  ratingText: {
    fontSize: 18,
    color: "#fff",
    justifyContent: "flex-end",
  },
});
