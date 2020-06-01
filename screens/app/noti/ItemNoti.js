import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'

export default function ItemNoti(props) {
  const { route } = props
  var time = moment(route.params.info.created_at)
  return (
    <View style={styles.container}>
      {/* <MainHeader
        title={$t('screens.notification.title')}
        goBack={() => {
          props.navigation.goBack()
        }}
      /> */}
      <View style={styles.content}>
        <View >
          <Text style={styles.contentText}>{route.params.info.content}</Text>
          <View style={styles.infoContent}>
            <Text style={styles.date}>{time.format('hh:mm DD/MM/YYYY')}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    fontSize: 20,
    color: '#fff'
  },
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    color: '#fff'

  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff'

  },
  date: {
    justifyContent: 'flex-end',
    color: '#fff',
    fontSize: 13

  },
  content: {
    paddingLeft: 40,
    paddingRight: 50,
    paddingTop: 15,
    color: '#fff'

  },
  contentText: {
    color: '#fff',
    fontSize:16
  }
})
