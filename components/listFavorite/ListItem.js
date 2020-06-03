import * as React from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native'
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Colors from '@constants/Colors'

export default function listItem(props) {
  const { filmItem, onPress } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {/* image film */}
        <ImageBackground
          source={{ uri: filmItem.imageUrl }}
          style={styles.img}
          imageStyle={{ borderRadius: 5 }}
        >
          <View style={styles.top}></View>
          <View style={styles.title}>
            <Text style={styles.titleText} ellipsizeMode='tail' numberOfLines={3}>{filmItem.title}</Text>
            <View style={styles.bottomTitle}></View>
          </View>
        </ImageBackground>
        {/* info film */}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 10,
  },
  img: {
    width: 190,
    height: 240,
    borderRadius: 5,
    flexDirection: 'column',
    flex:1
  },
  top:{
    flex:2
  },
  title: {
    flex:1,
    justifyContent: 'flex-end',
    opacity:0.7,
    backgroundColor:'#000',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  titleText:{
      justifyContent:'flex-start',
      color:"#FFF",
      flex:10,
      padding:10,
      fontSize:16,
  },
  bottomTitle:{
      flex:1
  }
})
