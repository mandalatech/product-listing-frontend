import * as settingAction from './types/settings'

const INITIAL_STATE = {
  settings: {},
  sku: false,
}
const settingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingAction.SET_USER_SETTINGS:
      console.log(' settings reducer [settings] ', action.payload)
      return { ...state, settings: action.payload }
    case settingAction.SET_SKU_SETTING:
      return {
        ...state,
        sku: action.payload,
      }
    default:
      return { ...state }
  }
}
export default settingReducer
