import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function listItem(props) {
  const { filmItem, onPress } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {/* image film */}
        <View style={styles.image}>
          <Image
            source={{ uri: filmItem.imageUrl }}
            style={styles.img}
            resizeMode={'cover'}
          />
        </View>
        {/* info film */}
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{filmItem.title}</Text>
          </View>
          {/* num like and comment  */}
          <View style={styles.info}>
            <View style={styles.like}>
              <View>
                <Ionicons
                  name="ios-heart-empty"
                  size={25}
                  color="#fff"
                  backgroundColor="white"
                />
              </View>
              <View>
                <Text style={styles.likeText}>{filmItem.like} Like</Text>
              </View>
            </View>

            <View style={styles.comment}>
            <View >
              <Ionicons
                name="md-text"
                size={25}
                color="#fff"
                backgroundColor="white"
              />
            </View>
            <View>
              <Text style={styles.commentText}>
                {filmItem.comment} Comments
              </Text>
            </View>
            </View>
            
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#0B0B0B',
  },
  image: {
    height: 200,
  },
  img: {
    width: 384,
    height: 200,
    borderRadius: 5,
  },
  content: {
    marginTop: 15,
  },

  title: {
    marginBottom: 5,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
  },
  info: {
    flexDirection: 'row',
    justifyContent:'space-between',
    flex: 1,
  },
  like: {
    flexDirection: 'row',
    flex: 1,
  },
  likeText: {
    color: '#f4f4f4',
    marginLeft: 10,
    marginTop: 4,
  },
  comment: {
    flexDirection: 'row',
    flex: 1,
  },
  commentText: {
    color: '#f4f4f4',
    marginLeft: 10,
    marginTop: 4,
  },
})
