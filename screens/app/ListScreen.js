import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { setLoading } from '@actions'

const PayScreen = ({ setLoading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setLoading(true)}>
        <Text>List test loading overlay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect(null, { setLoading })(PayScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})