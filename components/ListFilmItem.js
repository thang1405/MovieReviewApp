import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import moment from 'moment'
export default function ListFilmItem(props) {
  const { listFilmItem, onPress } = props
  var time = moment(listFilmItem.created_at)
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('../assets/icon/blackstar.png')}></Image>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{listFilmItem.title}</Text>
          <View style={styles.infoContent}>
            <View style={styles.content}><Text ellipsizeMode='tail' numberOfLines={1}>{listFilmItem.content}</Text></View>
            <View style={styles.timebox}><Text style={styles.date}>{time.format('DD/MM/YYYY')}</Text></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    fontSize: 20,
    padding: 10,
    borderBottomColor: '#787878',
    borderBottomWidth: 1,
    height:65,
    overflow:'hidden',
  },
  image: {
    marginTop: 5,
    flex: 10
  },
  title: {
    marginBottom: 10
  },
  info: {
    paddingLeft: 10,
    flex: 80
  },
  infoContent: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex:7.5,
    paddingRight:20
  },
  timebox:{
    flex:2.5
  },
  date: {
    justifyContent: 'flex-end'
  }
})
