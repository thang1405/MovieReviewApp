import { AsyncStorage } from 'react-native'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import vi from './vi'
import en from './en'
i18n.locale = Localization.locale
;(async () => {
  let appLocale = await AsyncStorage.getItem('@App:lang')
  if (appLocale !== null) {
    i18n.locale = appLocale
  }
})()
i18n.fallbacks = true
i18n.translations = {
  en,
  vi
}
window.setLang = async lang => {
  i18n.locale = lang
  await AsyncStorage.setItem('@App:lang', lang)
}
window.$t = (name, params = {}) => i18n.t(name, params) || name
