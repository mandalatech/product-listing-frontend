import * as settingAction from './types/settings'

const INITIAL_STATE = {
  settings: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingAction.SET_USER_SETTINGS:
      console.log(' settings reducer [settings] ', action.payload)
      return { ...state, settings: action.payload }
    default:
      return { ...state }
  }
}
