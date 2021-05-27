import * as settingsType from '../types/settings'

export const setSettings = (settings) => {
  return (dispatch) => {
    dispatch({ type: settingsType.SET_USER_SETTINGS, payload: settings })
  }
}

export const setSKUAutoGeneration = (setting) => {
  return (dispatch) => {
    dispatch({
      type: settingsType.SET_SKU_SETTING,
      payload: setting,
    })
  }
}
