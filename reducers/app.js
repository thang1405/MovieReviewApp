const initialState = {
  wakeup: false,
  loading: false,
  tabBarVisit: true
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WAKEUP':
      return { ...state, wakeup: action.wakeup }

    case 'SET_LOADING':
      return { ...state, loading: action.loading }

    case 'SET_TAB_BAR_VISIT':
      return { ...state, tabBarVisit: action.visit }

    default:
      return state
  }
}

export default app
