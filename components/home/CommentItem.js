import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

export default function CommentItem(props) {
  const { CommentItem } = props
  return (
    <View style={styles.container}>
      <Text>{CommentItem.name}</Text>
      <Text>{CommentItem.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:80,
    maxHeight: 150,
    overflow: 'hidden',
    borderBottomColor:"#f1f1f1",
    borderBottomWidth:1,
    padding:10
  },
})
