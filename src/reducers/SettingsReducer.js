import * as settingAction from './types/settings'

const INITIAL_STATE = {
  settings: {},
  topLoader: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingAction.SET_USER_SETTINGS:
      console.log(' settings reducer [settings] ', action.payload)
      return { ...state, settings: action.payload }
    case settingAction.SET_LOADER:
      console.log('[loader]', action.payload)
      return { ...state, topLoader: action.payload }
    default:
      return { ...state }
  }
}
