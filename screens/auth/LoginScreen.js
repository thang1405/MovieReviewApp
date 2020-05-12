import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { setAuth } from '@actions'

const LoginScreen = ({ setAuth }) => {
  const testLogin  = () => {
    setAuth({ token: 'abc' })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={testLogin}>
        <Text>Test login</Text>
        <Text>Touch Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect(null, { setAuth })(LoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

