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
import axios from "axios";

export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      id: props.filmItem.imdbID,
    };
  }
  componentDidMount() {
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&i=" + this.state.id).then(({ data }) => {
      let result = data;
      this.setState({ film: result });
    });
  }

  render() {
    const { filmItem, onPress } = this.props;
    const { film, id } = this.state;
    console.log(filmItem);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.result}>
            <Image
              source={{ uri: film.Poster }}
              resizeMode="cover"
              style={styles.Poster}
            />
            <View style={styles.heading}>
              <Text
                style={styles.title}
                ellipsizeMode="tail"
                numberOfLines={3}
              >
                {film.Title}({film.Year})
              </Text>
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
  },
  heading: {
    width:'90%',
    marginTop: 10,
    marginLeft: 10,
  },
  title:{
    color: "#fff",
    width:'90%',
    fontSize: 18,
    fontWeight: "700",
  },
  Poster: {
    width: 100,
    height: 120,
  },
  result: {
    flex: 1,
    width: "95%",
    height: 120,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#445565",
    borderRadius: 10,
    marginLeft: 10,
    paddingRight: 20,
  },
});
