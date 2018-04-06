// @flow
import * as Types from './types'

// STATE
export const initialState: Types.State = {
  foo: 'bar'
}

// REDUCER
export default (state: Types.State = initialState, action: Types.Action): Types.State => {
  switch (action.type) {
    default:
      return state
  }
}
