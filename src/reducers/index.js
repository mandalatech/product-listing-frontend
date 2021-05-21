import { combineReducers } from 'redux'
import rootReducer from './RootReducer'
import productReducer from './ProductReducer'

export default combineReducers({
  root: rootReducer,
  product: productReducer,
})
