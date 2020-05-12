import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { setLoading } from '@actions'
import { connect } from 'react-redux'
const LoadingOverlay = ({ setLoading, state }) => {
  // loading overlay timeout is 5s
  if (state.app.loading) {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }
  return <Spinner visible={state.app.loading} />
}
const mapState = state => ({ state })
export default connect(mapState, { setLoading })(LoadingOverlay)
