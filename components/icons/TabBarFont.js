import * as React from 'react'
import { MaterialCommunityIcons ,Entypo } from '@expo/vector-icons'
import Colors from '@constants/Colors'

export default function TabBarFont(props) {
  return (
    <Entypo
      name={props.name}
      size={props.big ? 60 : 30}
      style={{ marginBottom: -3, marginTop: props.big ? -30 : 0, }}
      color={props.focused ? Colors.red : '#fff'}
    />
  )
}
