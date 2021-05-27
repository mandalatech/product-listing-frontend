import * as settingsType from '../types/settings'

export const setSettings = settings => {
  return dispatch => {
    dispatch({ type: settingsType.SET_USER_SETTINGS, payload: settings })
  }
}

export const setLoader = status => {
  return dispatch => {
    dispatch({ type: settingsType.SET_LOADER, payload: status })
  }
}
