import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import firebase from "../../../firebase";
import SearchItem from "@components/home/SearchItem";
export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: "",
      results: [],
      page : 1
    };
  }

  search = () => {
    const { state } = this;
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&s=" + state.s+"&page=" + state.page).then(({ data }) => {
      let items = data.Search;
      // console.log(results);
      this.setState({ results: items });
    });
  };

  openPopup = (id) => {
    const user = firebase.auth().currentUser;
    const apiurl = "http://www.omdbapi.com/?apikey=ab60ee59";
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let items = data;
      let exists = false;
      firebase
        .database()
        .ref(`films/${items.imdbID}`)
        .on("value", (snapshot) => {
          if (snapshot.exists()) {
            exists = true;
            console.log("ton tai");
          } else {
            exists = false;
            console.log("ko ton tai");
          }
        });
      if (!exists) {
        //film chưa có trong db 
        //tạo trong db films
        firebase.database().ref(`films/${items.imdbID}`).update({
          isFavorite: false,
          title:items.Title
        });
        //tạo trong db listFavorite
        firebase.database().ref(`listFavorite/${user.uid}/${items.imdbID}`).update({
          isFavorite: false,
          title:items.Title
        });
        console.log("tao them");
      }
    });
  };

  render() {
    const { state } = this;
    // console.log(state);
    return (
      
      <ScrollView style={styles.container}>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={25}
            color="white"
            backgroundColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#f1f1f1"
            placeholder="Search Movie"
            value={state.s}
            autoFocus={true}
            onChangeText={(text) => this.setState({ s: text })}
            onSubmitEditing={this.search}
            underlineColorAndroid="transparent"
          />
        </View>
        <FlatList
          data={state.results}
          renderItem={({ item }) => (
            <SearchItem
              filmItem={item}
              onPress={() => {
                this.openPopup(item.imdbID);
                this.props.navigation.navigate({
                  name: "FilmInfo",
                  params: {
                    film: item,
                    filmID: item.imdbID,
                  },
                  // Poster:
                  //   "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
                  // Title: "Batman: The Dark Knight Returns, Part 1",
                  // Title: "movie",
                  // Year: "2012",
                  // imdbID: "tt2313197",
                  // filmID : imdbID
                });
              }}
            />
          )}
          keyExtractor={(item) => `${item.imdbID}`}
        />
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  searchSection: {
    margin: 15,
    marginLeft: 60,
    marginRight: 15,
    borderColor: "#212121",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121",
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 3,
  },
  input: {
    flex: 1,
    height: 45,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: "#212121",
    color: "white",
    fontSize: 17,
  },
  results: {
    flex: 1,
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

  popup: {
    flex: 1,
    marginTop: 24,
    justifyContent: "flex-start",
    padding: 10,
  },
  popupPlot: {
    fontSize: 16,
    marginTop: 20,
  },
  popupRating: {
    fontSize: 16,
    marginTop: 10,
  },
  popupTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  close: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    margin: 20,
    textAlign: "center",
  },
});
