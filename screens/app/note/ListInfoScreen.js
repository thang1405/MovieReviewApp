import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MainHeader from '../../../components/MainHeader'
import moment from 'moment'
export default function ListInfoScreen(props) {
  const { route } = props
  var time = moment(route.params.info.created_at)
  return (
    <View style={styles.container}>
      <MainHeader
        title={$t('screens.note.title')}
        goBack={() => {
          props.navigation.goBack()
        }}
      />
      <View style={styles.content}>
        <Text>{route.params.info.title}</Text>
        <Text style={styles.text}>{$t('screens.note.detail')}</Text>
        <View>
          <Text>{route.params.info.content}</Text>
          <View style={styles.infoContent}>
            <Text style={styles.date}>{time.format('hh:mm DD/MM/YYYY')}</Text>
            <Text>{route.params.info.sender}</Text>
          </View>
        </View>
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
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5
  },
  date: {
    justifyContent: 'flex-end'
  },
  content: {
    paddingLeft: 40,
    paddingRight: 50,
    paddingTop: 15
  }
})
