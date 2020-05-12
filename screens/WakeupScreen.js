import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setWakeup, setAuth } from '@actions'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'
import { get as _get } from 'lodash'

import Colors from '@constants/Colors'

const LoadingScreen = ({ setWakeup, setAuth }) => {
  const checkLogin = async () => {
    setTimeout(() => {
      setAuth(null)
      setWakeup(true)
    }, 2000)
  }
  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@assets/images/robot-dev.png')} />
      </View>
      <ImageBackground
        resizeMode="contain"
        source={require('@assets/images/robot-prod.png')}
        style={styles.hintContainer}
      />
      <View style={styles.versionContainer}>
        <View>
          <Text style={styles.textLink}>
            version 1.0.0
          </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hintContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLink: {
    marginVertical: 5,
    color: Colors.primary
  }
})
export default connect(null, { setWakeup, setAuth })(LoadingScreen)
