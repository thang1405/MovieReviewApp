import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ViewComponent,
} from 'react-native'

import bgImage from '@assets/images/background.png'
import { connect } from 'react-redux'
import { setAuth } from '@actions'

const SignInScreen = ({ setAuth }) => {
  const testLogin = () => {
    setAuth({ token: 'abc' })
  }
  //const { navigation } = this.props
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.header}>
        <Text style={styles.logo}>Sign in</Text>
      </View>

      <View style={styles.box}>
        <View stype={styles.inputView}>
          <Text style={styles.textScreen}>User name</Text>
          <TextInput
            style={styles.input}
            placeholder={'Enter your user name'}
            placeholderTextColor={'white'}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            //onSubmitEditing={() => this.refs.txPassword.focus()}
          />
        </View>

        <View stype={styles.inputView}>
          <Text style={styles.textScreen}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder={'Enter your password'}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            //ref={'txPassword'}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={testLogin}
            style={[styles.loginBtn, { backgroundColor: '#fb5b5a' }]}
          >
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>

          <Text
            style={[styles.loginText, { fontSize: 14, textAlign: 'center' }]}
          >
            or
          </Text>

          <TouchableOpacity
            style={[styles.loginBtn, { backgroundColor: 'white' }]}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('@assets/images/iconfb.png')}
                style={{ width: 20, height: 20, marginHorizontal: 10 }}
              ></Image>
              <Text style={{ color: 'blue' }}>with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.loginText}>Don't have an account?</Text>

          <TouchableOpacity
          //  onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={{ marginLeft: 40, color: '#FF0000' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
  //}
}
export default connect(null, { setAuth })(SignInScreen)

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
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  textScreen: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginTop: 15,
  },
  inputView: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20,
  },
  input: {
    fontSize: 13,
    height: 40,
    color: 'white',
    paddingHorizontal: 5,
    borderBottomColor: '#FFFFFF',
    opacity: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  forgot: {
    textAlign: 'right',
    color: 'white',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 30,
    marginRight: 20,
  },
  loginBtn: {
    width: '85%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
})
