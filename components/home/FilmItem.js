import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
export default function listItem(props) {
  const { filmItem, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.image}>
          {/* <Image source={require('../assets/images/robot-dev.png')}></Image> */}
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{filmItem.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    fontSize: 20,
    padding: 10,
    borderBottomColor: '#787878',
    borderBottomWidth: 1,
    height:80,
    overflow:'hidden',
  },
  image: {
    marginTop: 5,
    flex: 50
  },
  title: {
    marginBottom: 10
  },
  info: {
    paddingLeft: 10,
    flex: 50
  },
})
