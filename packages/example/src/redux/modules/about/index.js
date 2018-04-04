// @flow
import * as Types from './types'

// CONSTANTS
const UPDATE_TEXT: Types.UpdateTextConstant = 'UPDATE_TEXT'

// STATE
export const initialState: Types.State = {
  text: 'About us'
}

// REDUCER
export default (state: Types.State = initialState, action: Types.Action): Types.State => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      }

    default:
      return state
  }
}

// ACTION CREATORS
export const updateFoo: Types.UpdateText = text => ({
  type: UPDATE_TEXT,
  text
})
