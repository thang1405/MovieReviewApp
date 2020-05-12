import * as React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { setLoading, setTabBarVisit } from '@actions'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text >HI</Text>
    </View>
  )
}

export default connect(null, { setTabBarVisit, setLoading })(ProfileScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})
