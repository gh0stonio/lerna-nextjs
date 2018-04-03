// @flow
import * as Types from './types'

// CONSTANTS
const UPDATE_FOO: Types.UpdateFooConstant = 'UPDATE_FOO'

// STATE
const initialState: Types.State = {
  foo: 'bar'
}

// REDUCER
export default (state: Types.State = initialState, action: Types.Action): Types.State => {
  switch (action.type) {
    case UPDATE_FOO:
      return {
        ...state,
        foo: action.foo
      }

    default:
      return state
  }
}

// ACTION CREATORS
export const updateFoo: Types.UpdateFoo = foo => ({
  type: UPDATE_FOO,
  foo
})
