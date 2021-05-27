import * as bundleType from 'src/reducers/types/bundle'

export const setBundleInput = (input) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.SET_BUNDLE_INPUT,
      payload: input,
    })
  }
}

export const setBundleInputError = (errors) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.SET_BUNDLE_INPUT_ERROR,
      payload: errors,
    })
  }
}

export const clearBundleInput = () => {
  return (dispatch) => {
    dispatch({
      type: bundleType.CLEAR_BUNDLE_INPUT,
    })
  }
}

export const updateBundles = (bundles) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.UPDATE_BUNDLES,
      payload: bundles,
    })
  }
}
