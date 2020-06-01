import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import moment from 'moment'

export default function ListNoti(props) {
  const { listNoti, onPress } = props
  var time = moment(listNoti.created_at)
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.infoContent}>
            <View style={styles.content}><Text ellipsizeMode='tail' numberOfLines={1} style={styles.textContent}>{listNoti.content}</Text></View>
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
    flexDirection: 'row',
    fontSize: 20,
    padding: 10,
    borderBottomColor: '#3B3839',
    borderBottomWidth: 1,
    height:55,
    overflow:'hidden',
    color: '#fff'
  },
  info: {
    paddingLeft: 10,
    flex: 80,
    paddingTop:5
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
    justifyContent: 'flex-end',
    color:'#fff',
    fontSize: 13
  },
  textContent: {
      color:'#fff',
      fontSize: 15
  }
})
