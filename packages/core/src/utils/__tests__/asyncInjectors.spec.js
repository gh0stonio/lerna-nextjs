/* eslint no-underscore-dangle: 0 */
/* eslint no-empty-function: 0 */
import { asyncInjectors } from '../asyncInjectors'

describe('injectReducer', () => {
  it('should replace the store reducer', () => {
    const store = {
      replaceReducer: jest.fn()
    }

    asyncInjectors.injectReducer(store)

    expect(store.replaceReducer).toBeCalled()
  })
})

describe('injectSagas', () => {
  it('should throw if injected sagas are not an array', () => {
    const store = {}

    expect(() => {
      asyncInjectors.injectSagas(store, { key: 'foo', sagas: {} })
    }).toThrow('Expected `sagas` to be an array of generator functions')
  })

  it('should throw if injected sagas are an empty array', () => {
    const store = {}

    expect(() => {
      asyncInjectors.injectSagas(store, { key: 'foo', sagas: [] })
    }).toThrow('Received an empty `sagas` array')
  })

  it('should save the sagas', () => {
    const mocks = {
      store: {},
      key: 'foo',
      sagas: [function*() {}]
    }
    const runSagaSpy = jest.spyOn(asyncInjectors, 'runSaga').mockImplementation(() => () => ({}))

    asyncInjectors._sagasFactory = {}
    asyncInjectors.injectSagas(mocks.store, { key: mocks.key, sagas: mocks.sagas })

    const expectedResult = { [mocks.key]: { sagas: mocks.sagas } }

    expect(asyncInjectors._sagasFactory).toEqual(expectedResult)
    runSagaSpy.mockRestore()
  })

  it('should call runSaga', () => {
    const mocks = {
      store: {},
      key: 'foo',
      sagas: [function*() {}] // eslint-disable-line no-empty-function
    }
    const runSagaSpy = jest.spyOn(asyncInjectors, 'runSaga').mockImplementation(() => () => ({}))

    asyncInjectors.injectSagas(mocks.store, { key: mocks.key, sagas: mocks.sagas })

    expect(runSagaSpy).toHaveBeenCalledWith(mocks.store, mocks.key)
    runSagaSpy.mockRestore()
  })
})

describe('runSaga', () => {
  it('should return if sagas not found in stack', () => {
    const mocks = {
      store: {},
      key: 'foo'
    }

    asyncInjectors._sagasFactory = {}

    const expectedResult = undefined
    const actualResult = asyncInjectors.runSaga(mocks.store, mocks.key)

    expect(actualResult).toEqual(expectedResult)
  })

  it('should return if sagas found but already running', () => {
    const mocks = {
      store: { runSagaTask: jest.fn() },
      key: 'foo',
      sagas: [function*() {}],
      tasks: [{ isRunning: jest.fn().mockImplementation(() => true) }]
    }

    asyncInjectors._sagasFactory = { [mocks.key]: { sagas: mocks.sagas, tasks: mocks.tasks } }

    const expectedResult = undefined
    const actualResult = asyncInjectors.runSaga(mocks.store, mocks.key)

    expect(actualResult).toEqual(expectedResult)
  })

  it('should run the sagas', () => {
    const task = { isRunning: jest.fn().mockImplementation(() => false) }
    const mocks = {
      store: {
        runSagaTask: jest.fn().mockImplementation(() => task)
      },
      key: 'foo',
      sagas: [function*() {}] // eslint-disable-line no-empty-function
    }

    asyncInjectors._sagasFactory = { [mocks.key]: { sagas: mocks.sagas } }

    const expectedResult = { [mocks.key]: { sagas: mocks.sagas, tasks: [task] } }
    asyncInjectors.runSaga(mocks.store, mocks.key)

    expect(asyncInjectors._sagasFactory).toEqual(expectedResult)
  })
})
