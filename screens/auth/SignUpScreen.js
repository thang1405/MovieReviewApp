import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ViewComponent, KeyboardAvoidingView } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

import bgImage from '@assets/images/background.png'


export default class SignUp extends React.Component {
 
  render() {
    const { navigation } = this.props
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView behavior='paddings' style={styles.backgroundContainer} >
          <View style={styles.header}>
            <Text style={styles.logo}>Sign up</Text>
          </View>

          <View style={styles.box}>
            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your email"}
                placeholderTextColor={"white"}
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={()=> this.refs.txUsername.focus()}
                underlineColorAndroid='transparent'
              />
            </View>

            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>User name</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your user name"}
                placeholderTextColor={"white"}
                keyboardType='email-address'
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onSubmitEditing={()=> this.refs.txPassword.focus()}
                ref={"txUsername"}
              />
            </View>

            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your password"}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onSubmitEditing={()=> this.refs.txConfirmPassword.focus()}
                ref={"txPassword"}
              />
            </View>

            <View stype={styles.inputView}>
              <Text style={styles.textScreen}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder={"Enter your password"}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                ref={"txConfirmPassword"}
              />
            </View>

            <View style={[styles.footer, {alignItems: 'center', justifyContent: 'center'}]}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
              style={[styles.loginBtn, {backgroundColor:"#fb5b5a"}]}>
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
            </View> 

          </View>
          </KeyboardAvoidingView>  
      </ImageBackground> 
    );
  }


}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  logo: {
    fontWeight:"bold",
    fontSize:40,
    color:"white",
  },
  textScreen: {
    fontWeight:"bold",
    fontSize:16,
    color:"white",
    marginTop:15,

  },
  inputView:{
    width:"80%",
    borderRadius:25,
    height:50,
    marginBottom:20,
    padding:20,
  },
  input: {
    fontSize: 13,
    height: 40,
    color:"white",
    paddingHorizontal: 5,
    borderBottomColor:"#FFFFFF",
    opacity: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  loginBtn:{
    width:"85%",
    borderRadius:25,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }  
});