export const UPDATE_FOO = 'UPDATE_FOO'

export const initialState = {
  foo: 'bar'
}

// Reducer
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FOO:
      return {
        ...state,
        foo: action.newFoo
      }
    default:
      return state
  }
}

// ACTION CREATORS
export const updateFoo = newFoo => ({ type: UPDATE_FOO, newFoo })
