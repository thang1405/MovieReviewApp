import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  Keyboard,
  Platform
} from 'react-native'
import { connect } from 'react-redux'
import { setLoading } from '@actions'
import { TextInput } from 'react-native-gesture-handler'

const PostScreen = ({ setLoading }) => {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.imgPost}>
        <TouchableOpacity
          onPress={() => setLoading(true)}
          style={styles.flexImage}
        >
          <Image
            source={require('../../assets/icon/add.png')}
            style={styles.imageAdd}
          />
          <Text style={styles.uploadImg}>Upload images or videos</Text>
        </TouchableOpacity>
      </View>
      {/* 2 input */}
      <View style={styles.content}>
        <TextInput
          style={styles.textTitle}
          placeholder={'Title...'}
        ></TextInput>
        <TextInput
          style={styles.textCmt}
          placeholder={'Say something...'}
          onSubmitEditing={Keyboard.dismiss}
           multiline={true}
        ></TextInput>
      </View>
      <View style={styles.button}>
        <Button
          title={'Post'}
          style={styles.btnPost}
          color={'#fff'}
        ></Button>
      </View>
    </View>
  )
}

export default connect(null, { setLoading })(PostScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    marginTop:Platform.OS === 'ios' ? 20:0
  },
  imgPost: {
    flex: 5,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  uploadImg: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  content: {
    backgroundColor: '#fff',
    flex: 4,
    marginTop: 10,
  },
  textTitle: {
    marginLeft: 31,
    borderBottomColor: '#E3E3E3',
    marginRight: 31,
    padding: 5,
    borderBottomWidth: 1,
    height: 40,
    fontSize:18
  },
  textCmt: {
    marginLeft: 31,
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
    marginRight: 31,
    padding: 5,
    height: 100,
    justifyContent: 'flex-start',
    fontSize:18
  },
  button:{
    width:'60%',
    height:40,
    marginLeft:'20%',
    justifyContent: 'center',
    alignContent:'center',
    backgroundColor:'#FF001B',
    borderRadius:25,
    marginBottom:10
  },
  btnPost: {
    fontWeight: 'bold',
    color: '#FF001B',
    
  },
  imageAdd: {
    // height: 40,
    // width: 40,
    marginTop: 120,
    // zIndex: 2
    marginLeft: 45,
  },
})
