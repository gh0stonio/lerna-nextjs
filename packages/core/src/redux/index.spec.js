import reducer from '.'
import global, { initialState as globalInitialState } from './global'

describe('Redux', () => {
  it('should return the combined reducers initial state (without asyncReducers)', () => {
    const actualResult = reducer()({}, {})
    const expectedResult = { global: globalInitialState }

    expect(actualResult).toEqual(expectedResult)
  })

  it('should return the combined reducers initial state (with asyncReducers)', () => {
    const mockedReducer = { mock: global }
    const actualResult = reducer(mockedReducer)({}, {})
    const expectedResult = { global: globalInitialState, mock: globalInitialState }

    expect(actualResult).toEqual(expectedResult)
  })
})
