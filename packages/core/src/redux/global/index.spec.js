import reducer, * as source from '.'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(source.initialState)
})
