import { combineReducers } from 'redux'
import rootReducer from './RootReducer'
import productReducer from './ProductReducer'
import groupReducer from './groupReducer'
import SettingsReducer from './SettingsReducer'

export default combineReducers({
  root: rootReducer,
  product: productReducer,
  group: groupReducer,
  settings: SettingsReducer,
})
