import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MainHeader from '../../../components/MainHeader'

export default function ListInfoScreen(props) {
  const { route } = props
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {/* <Image source={require('../../import UserScreen from '@screens/app/UserScreen'')}></Image> */}
      </View>
      <View>
      <Text styles={styles.title}>{route.params.film.title}</Text>
      <Text styles={styles.content}>{route.params.film.content}</Text>
      <Text styles={styles.like}>{route.params.film.like}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 20
  },
})
