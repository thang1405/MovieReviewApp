import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { setLoading, setAuth } from '@actions'
import MainHeader from '@components/MainHeader'

const HomeScreen = ({ setLoading, setAuth }) => {
  return (
    <View style={styles.container}>
      {/* <MainHeader title={$t('screens.home.title')} hasAvatar hasLogo/> */}
      <View style={styles.mainContent}>
        <TouchableOpacity onPress={() => setLoading(true)}>
          <Text>Home test loading overlay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAuth(null)}>
          <Text>Home test logout</Text>
        </TouchableOpacity>
        <Text>Vuốt từ trái sang để ...</Text>
        {/* <Button title="vn" onPress={() => setLang('vi-vn')} /> btn for language */}
      </View>
    </View>
  )
}

export default connect(null, { setLoading, setAuth })(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
