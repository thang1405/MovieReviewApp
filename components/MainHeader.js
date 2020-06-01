import React from 'react'
import Colors from '@constants/Colors'
import { get as _get } from 'lodash'
import { Header } from 'react-native-elements'
import { StyleSheet, Image, View } from 'react-native'
const MainHeader = props => {
  const {
    goBack,
    titleStyle,
    leftComponent,
    avtContainerStyle,
    hasAvatar,
    avatarStyle,
    hasLogo,
    logoStyle
  } = props
  const title = _get(props, 'title')
    ? _get(props, 'title').toUpperCase()
    : ''
  const headerAvatar = () => (
    <View style={[local_styles.avtContainer, avtContainerStyle]}>
    </View>
  )
  const headerLogo = () => (
    <Image
      style={[local_styles.logo, logoStyle]}
      source={require('@assets/images/logo-1.png')}
    />
  )
  return (
    <Header
      placement="left"
      leftComponent={
        leftComponent || goBack
          ? {
              icon: 'keyboard-arrow-left',
              size: 25,
              color: Colors.white,
              onPress: goBack,

            }
          : null
      }
      centerComponent={
        hasLogo
          ? headerLogo
          : {
              text: title,
              style: titleStyle || local_styles.title
            }
      }
      backgroundColor={'#0B0B0B'}
      rightComponent={hasAvatar ? headerAvatar : null}
    />
  )
}
const local_styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontWeight: '100',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleStyle: {
    borderColor:'#000',
  }
})
export default MainHeader