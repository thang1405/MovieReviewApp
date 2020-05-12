import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ProfileButton(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        props.active ? styles.active : '',
        props.style
      ]}
      onPress={() => navigation.navigate(props.pageName)}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, props.active ? styles.activeText : '']}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#222',
    padding: 5
  },

  active: {
    backgroundColor: 'blue'
  },

  activeText: {
    color: '#fff'
  }
})
