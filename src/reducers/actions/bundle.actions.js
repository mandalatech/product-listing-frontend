import * as bundleType from 'src/reducers/types/bundle'

export const addBundleItems = (bundleItem) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.ADD_BUNDLE_ITEM,
      payload: bundleItem,
    })
  }
}

export const removeBundleItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.REMOVE_BUNDLE_ITEM,
      payload: {
        id,
      },
    })
  }
}

export const setBundleItem = (payload) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.SET_BUNDLE_ITEM,
      payload: payload,
    })
  }
}

export const clearBundleInputError = () => {
  return (dispatch) => {
    dispatch({
      type: bundleType.CLEAR_BUNDLE_INPUT_ERROR,
    })
  }
}

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

export const setBundleName = (name) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.SET_BUNDLE_NAME,
      payload: {
        name,
      },
    })
  }
}

export const populateBundleItems = (bundleItems) => {
  return (dispatch) => {
    dispatch({
      type: bundleType.POPULATE_BUNDLE_ITEMS,
      payload: bundleItems,
    })
  }
}
