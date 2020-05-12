import { AsyncStorage } from 'react-native'
import { get as _get } from 'lodash'

const initialState = {
  token: null,
  user: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      let user = _get(action, 'data.user') || null
      let token = _get(action, 'data.token') || null
      if (token) {
        AsyncStorage.setItem('@Auth:token', token)
        window.axios.defaults.headers.common['Authorization'] =
          'Bearer ' + token
      } else {
        AsyncStorage.removeItem('@Auth:token')
      }
      if (user) {
        AsyncStorage.setItem('@Auth:user', JSON.stringify(user))
      } else {
        AsyncStorage.removeItem('@Auth:user')
      }

      return { ...state, user, token }
    default:
      return state
  }
}

export default auth
