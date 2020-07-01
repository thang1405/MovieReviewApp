import * as React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Colors from '@constants/Colors'

export default function TabBarEvil(props) {
  return (
    <EvilIcons
      name={props.name}
      size={props.big ? 60 : 30}
      style={{ marginBottom: -3, marginTop: props.big ? -30 : 0, }}
      color={props.focused ? Colors.red : '#fff'}
    />
  )
}
