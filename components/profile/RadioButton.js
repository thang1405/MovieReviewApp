import React from 'react'
import { View } from 'react-native'

export default function RadioButton(props) {
  return (
    <View style={[{
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    }, props.style]}>
      {
        props.selected ?
          <View style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: '#ccc',
          }} />
          : null
      }
    </View>
  );
}
