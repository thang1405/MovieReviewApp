import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
export default function listItem(props) {
  const { filmItem, onPress } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        {/* image film */}
        <View style={styles.image}>
          <Image style={styles.img} source={filmItem.imageUrl}/>
        </View>
        {/* info film */}
        <View style={styles.content}>
          <View style={styles.title}>
            <Text >{filmItem.title}</Text>
          </View>
          {/* num like and comment  */}
          <View style={styles.info}>
            <Text styles={styles.like}>{filmItem.like} Like</Text>
            <Text styles={styles.comment}>{filmItem.comment} Comments</Text>
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
    fontSize: 20,
  },
  image: {
    borderColor: '#787878',
    borderWidth: 1,
    borderRadius:5,
    height:200,
  },
  content: {
    marginTop: 15,
  },
  title: {
    marginBottom: 5,
    overflow:'hidden',
    fontSize:30
  },
  like:{
    flex:50
  },
  comment:{
    flex:50
  },
  info: {
    flexDirection: 'row',
    flex:1
  },
})
