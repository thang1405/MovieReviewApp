import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import FilmItem from "@components/home/FilmItem";

import firebase from "../../../firebase";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeList: [],
      limit:3
    };
  }

  search = () => {
    // console.log('s : ' + this.state.s)
    this.props.navigation.navigate("Search");
  };

  componentDidMount = () => {
    let user = firebase.auth().currentUser;
    let exists = false ;
    firebase.database().ref(`users/${user.uid}`).on('value',(snap)=>{
      if(snap.exists){
        console.log("user exists!");
        exists = true;
      }else{
        console.log("users no exists!");
        firebase.database().ref("users").child(`${user.uid}`).set({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        exists = true;
        console.log('add'+`${user.uid}`);
      }
    });
    firebase.database().ref('films').on('value',(snapshot)=>{
      var items = [];
      snapshot.forEach((doc) => {
        items.push({
          id: doc.key,
          isFavorite: doc.val().isFavorite,
          comments : doc.comments
        });
      });
      this.setState({ homeList: items });

    })
  };  

  render() {
    const { navigation } = this.props;
    const { homeList } = this.state;
    console.log('state home');
    console.log(homeList);
    return (
      <ScrollView>
        <View style={styles.container}>
        <FlatList
          data={homeList}
          renderItem={({ item }) => (
            <FilmItem
              filmItem={item}
              onPress={() => {
                navigation.navigate({
                  name: "FilmInfo",
                  params: { filmID:item.id},
                  // film : id , isFavorite ,comments
                  //filmID : id
                });
              }}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    // marginTop:Platform.OS === 'ios' ? 34:0
  },
  searchSection: {
    margin: 10,
    marginLeft: 15,
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
});
