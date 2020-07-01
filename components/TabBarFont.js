import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@constants/Colors'

export default function TabBarFont(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.big ? 60 : 30}
      style={{ marginBottom: -3, marginTop: props.big ? -30 : 0, }}
      color={props.focused ? Colors.red : '#fff'}
    />
  )
}
