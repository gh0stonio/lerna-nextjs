import makeRootReducer from '../redux/modules'

class AsyncInjectors {
  injectReducer(store, asyncReducer) {
    store.replaceReducer(makeRootReducer(asyncReducer))
  }
}

export const asyncInjectors = new AsyncInjectors()
