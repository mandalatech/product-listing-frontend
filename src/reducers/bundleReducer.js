import * as bundleType from 'src/reducers/types/bundle'

const initialState = {
  productOne: '',
  productTwo: '',
  bundleQuantity: '',
  error: {},
}

const bundleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case bundleType.SET_BUNDLE_INPUT:
      return { ...state, ...payload }
    case bundleType.SET_BUNDLE_INPUT_ERROR:
      return {
        ...state,
        error: payload,
      }
    case bundleType.CLEAR_BUNDLE_INPUT:
      return initialState
    default:
      return state
  }
}

export default bundleReducer
