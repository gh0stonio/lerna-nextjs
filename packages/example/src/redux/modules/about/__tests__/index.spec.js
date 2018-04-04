import reducer, * as source from '..'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(source.initialState)
})

it('should handle UPDATE_TEXT', () => {
  const mockText = 'foo'
  const action = source.updateFoo(mockText)

  const state = source.initialState
  const expectedState = {
    ...state,
    text: mockText
  }

  expect(reducer(state, action)).toEqual(expectedState)
})
