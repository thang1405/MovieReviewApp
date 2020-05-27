import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CommentItem from '../../../components/home/CommentItem'

export default function ListInfoScreen(props) {
  const { route } = props
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: route.params.film.imageUrl }}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.infomation}>
          <Text styles={styles.title}>{route.params.film.title}</Text>
          <Text styles={styles.content}>{route.params.film.content}</Text>
          {/* num like and comment  */}
        </View>
        <View style={styles.comment_list}>
          <View styles={styles.like}>
            <View>
              <Ionicons
                name="md-text"
                size={25}
                color="blue"
                backgroundColor="white"
              />
            </View>
            <View>
              <Text>{route.params.film.comment} Comment</Text>
            </View>
          </View>
          <View styles={styles.comment}>
            <View>
              <Ionicons
                name="ios-heart-empty"
                size={25}
                color="red"
                backgroundColor="white"
              />
            </View>
            <View>
              <Text>{route.params.film.like} Like</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={route.params.film.comments}
          renderItem={({ item }) => <CommentItem CommentItem={item} />}
          // keyExtractor={(item) => `${item.id}`}
        />
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#f1f1f1"
            placeholder="Enter your comment"
            onChangeText={(searchString) => {
              this.setState({ searchString })
            }}
            underlineColorAndroid="transparent"
          />
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={25}
            color="white"
            backgroundColor="gray"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  image: {
    flex:30,
    height: 200,
  },
  bottom:{
    padding: 10,
    flex:70,
    borderColor:'black',
    borderWidth:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  infomation: {
    maxHeight: 150,
    overflow: 'hidden',
    
  },
  comment_list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  like: {
    flexDirection: 'row',
  },
  comment: {
    flexDirection: 'row',
  },
  searchSection: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
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
    backgroundColor: 'gray',
    color: 'white',
  },
})
