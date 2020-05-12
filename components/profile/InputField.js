import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default InputField = props => (
  <View>
    <Text style={styles.text}>{props.children}</Text>
    <TextInput
      style={styles.inputField}
      placeholder="Type here"
    />
  </View>
)

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10
  },

  text: {
    padding: 5,
    marginTop: 5,
  },
})


