import React from 'react'
import { connect } from 'react-redux'
import { get as _get } from 'lodash'

import WakeupScreen from '@screens/WakeupScreen'
import AuthNavigator from '@navigations/AuthNavigator'
import AppNavigator from '@navigations/AppNavigator'

const AppRoot = ({ state }) => {
  let isLogin = _get(state, 'auth.token')
  let wakeup = _get(state, 'app.wakeup')

  if (!wakeup) {
    return <WakeupScreen />
  }
   return !isLogin ? <AuthNavigator /> : <AppNavigator />
  // return <AppNavigator />
}

const mapState = state => ({ state })

export default connect(mapState, null)(AppRoot)
