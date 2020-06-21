import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView
} from 'react-native'
import PostItem from '@components/post/PostItem'
import { Avatar } from 'react-native-elements'
import { user } from '../../../fake_data/film_home.json'
import postList from '../../../fake_data/post.json'
import firebase from '../../../firebase'
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: postList.posts,
    }
  };
  
  render() {
    const { navigation } = this.props
    const { post } = this.state
    var use = firebase.auth().currentUser;
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.position}>
            <TouchableOpacity activeOpacity={0.98}>
              <Avatar
                rounded
                source={{
                  uri: user.avatar,
                }}
                size="xlarge"
              />
            </TouchableOpacity>
            <Text style={styles.username}>Username : {use.displayName}</Text>
              <Text style={styles.email}>Email : {use.email} {use.photoURL}</Text>
          </View>
          <View style={styles.postList}>
            <FlatList
              data={post}
              renderItem={({ item }) => (
                <PostItem
                  postItem={item}
                  onPress={() => {
                    navigation.navigate({
                      name: 'UserPost',
                      params: { post: item },
                    })
                  }}
                />
              )}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  top: {
    height:120,
    backgroundColor: '#111111',
  },
  bottom: {

    // alignItems: 'center',
  },
  position: {
    alignItems: 'center',
    position: 'relative',
    top: -80,
  },
  username: {
    fontSize: 18,
  },
  email: {
    fontSize: 15,
  },
  postList: {},
})
