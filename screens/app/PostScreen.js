import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { setLoading } from '@actions'
import { TextInput } from 'react-native-gesture-handler'

const PostScreen = ({ setLoading }) => {
  return (
    <View style={styles.container}>
        <View style={styles.imgPost}>
            <TouchableOpacity onPress={()=>setLoading(true)}>
            <Text style={styles.uploadImg}>Upload images or videos</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <TextInput style={styles.textTitle} placeholder={'Title...'}></TextInput>
            <TextInput style={styles.textCmt} placeholder={'Say something...'}
             numberOfLines={20} multiline={true}></TextInput>
        </View>
        <Button title={"Post"} style={styles.btnPost} color={'#FF001B'}></Button>
    </View>
  )
}

export default connect(null, { setLoading })(PostScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0B0B0B',
  },
  imgPost: {
    flex: 3,
    backgroundColor: '#000',
    alignItems:'center'
  },
  uploadImg: {
    color: '#FFFFFF',
    marginTop: 250,
    fontSize: 15

  },
  content: {
    backgroundColor:'#fff',
    flex: 4,
    marginTop: 90
  },
  textTitle: {
      marginLeft: 31,
      borderBottomColor: '#E3E3E3',
      marginRight: 31,
      padding: 5,
      borderBottomWidth: 1
  },
  textCmt: {
    marginLeft: 31,
    borderBottomColor: '#E3E3E3',
    marginRight: 31,
    padding: 5,
    justifyContent:'flex-start',
    height: 50
  },
  btnPost: {
      backgroundColor: '#FF001B',
      fontWeight:'bold',
      color: '#FF001B',
  }
})