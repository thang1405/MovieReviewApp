import * as React from 'react'
import { MaterialCommunityIcons ,Entypo } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons';
import Colors from '@constants/Colors'

export default function TabBarMat(props) {
  return (
    <Octicons
      name={props.name}
      size={props.big ? 60 : 30}
      style={{ marginBottom: -3, marginTop: props.big ? -30 : 0, }}
      color={props.focused ? Colors.red : '#fff'}
    />
  )
}
