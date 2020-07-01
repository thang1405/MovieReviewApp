import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import axios from "axios";
export default class listItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      id: props.filmItem.id,
    };
  }

  componentDidMount() {
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&i=" + this.state.id).then(({ data }) => {
      let result = data;
      // console.log(result);
      this.setState({ film: result });
    });
  }

  render() {
    const { filmItem, onPress } = this.props;
    const { film , id } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          {/* image film */}
          <ImageBackground
            source={{ uri: film.Poster }}
            style={styles.img}
            imageStyle={{ borderRadius: 5 }}
          >
            <View style={styles.top}></View>
            <View style={styles.title}>
              <Text
                style={styles.titleText}
                ellipsizeMode="tail"
                numberOfLines={3}
              >
                {film.Title}
              </Text>
              <View style={styles.bottomTitle}></View>
            </View>
          </ImageBackground>
          {/* info film */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    paddingLeft: 5,
    marginLeft:2,
    marginTop:10
  },
  img: {
    width: 190,
    height: 240,
    borderRadius: 5,
    flexDirection: "column",
    flex: 1,
  },
  top: {
    flex: 2,
  },
  title: {
    flex: 1,
    justifyContent: "flex-end",
    opacity: 0.7,
    backgroundColor: "#000",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  titleText: {
    justifyContent: "flex-start",
    color: "#FFF",
    flex: 10,
    padding: 10,
    fontSize: 16,
  },
  bottomTitle: {
    flex: 1,
  },
});
