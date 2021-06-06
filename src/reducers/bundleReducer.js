import * as bundleType from 'src/reducers/types/bundle'

const initialState = {
  name: '',
  bundleItems: [],
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
    case bundleType.ADD_BUNDLE_ITEM:
      return {
        ...state,
        bundleItems: state.bundleItems.concat(payload),
      }
    case bundleType.REMOVE_BUNDLE_ITEM:
      return {
        ...state,
        bundleItems: state.bundleItems.filter((item) => item.id !== payload.id),
      }
    case bundleType.SET_BUNDLE_ITEM:
      let changedIndex = state.bundleItems.findIndex(
        (option) => option.id === payload.id
      )
      let newBundleItems = [...state.bundleItems]
      const changedRecord = {
        ...payload,
      }
      newBundleItems[changedIndex] = changedRecord
      return {
        ...state,
        bundleItems: newBundleItems,
      }
    case bundleType.CLEAR_BUNDLE_INPUT_ERROR:
      return {
        ...state,
        error: {},
      }
    case bundleType.SET_BUNDLE_NAME:
      return {
        ...state,
        name: payload.name,
      }
    case bundleType.POPULATE_BUNDLE_ITEMS:
      return {
        ...state,
        bundleItems: payload,
      }
    default:
      return state
  }
}

export default bundleReducer
