import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

// import {appl} from 'react-redux'

/* eslint-disable no-underscore-dangle */
const initialState = {}

// const middleware = [thunk]

const store =
  process.env.NODE_ENV !== 'development'
    ? createStore(rootReducer, initialState, applyMiddleware(thunk))
    : createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
export default store
/* eslint-enable */
