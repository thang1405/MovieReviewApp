import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { setLoading } from '@actions'
import { Avatar } from 'react-native-elements'
import { user } from '../../../fake_data/film_home.json'
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.position}> 
            <TouchableOpacity activeOpacity={0.98}>
            <Avatar
              rounded
              source={{
                uri: user.avatar,
              }}
              size="xlarge"
            />
            </TouchableOpacity>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>Email : {user.email}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    backgroundColor: '#111111',
  },
  bottom: {
    flex: 3,
    // alignItems: 'center',
  },
  position:{
    alignItems: 'center',
    position:'relative',
    top:-80
  },
  username:{
    fontSize:18
  },
  email:{
    fontSize:15
  }
})
