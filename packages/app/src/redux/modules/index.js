// @flow
import { combineReducers } from 'redux'

import global from './global'

export default (asyncReducer?: Object) =>
  combineReducers({
    global,
    ...asyncReducer
  })
