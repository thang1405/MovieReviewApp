import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './lang'

import RootScreen from '@screens/RootScreen'
import LoadingOverlay from '@components/LoadingOverlay'

// define global axios
window.axios = require('axios')
window.axios.defaults.headers.common['Content-Type'] = 'application/json'
window.axios.defaults.headers.common['Accept'] = 'application/json'
// window.axios.defaults.baseURL = 'http://kidsnow.edu.vn/api'

export default function App() {
  return (
    <Provider store={store}>
      <LoadingOverlay />
      <RootScreen />
    </Provider>
  )
}
