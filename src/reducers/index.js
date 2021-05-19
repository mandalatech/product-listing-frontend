import * as actionTypes from './actions'

const initialState = {
  sidebarShow: 'responsive',
  data: {},
  payload: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_GROUP:
      return {
        ...state,
        data: {
          ...state.data,
          productGroups: action.payload,
        },
      }
    case actionTypes.UPDATE_BRANDS:
      return {
        ...state,
        data: {
          ...state.data,
          brands: action.payload,
        },
      }
    case actionTypes.UPDATE_MANUFACTURERS:
      return {
        ...state,
        data: {
          ...state.data,
          manufacturers: action.payload,
        },
      }
    case actionTypes.UPDATE_BASIC_INFO:
      return {
        ...state,
        payload: {
          ...state.payload,
          ...action.payload,
        },
      }
    case actionTypes.UPDATE_SHORT_DESCRIPTION:
      return {
        ...state,
        payload: {
          ...state.payload,
          ...action.payload,
        },
      }
    case actionTypes.UPDATE_LONG_DESCRIPTION:
      return {
        ...state,
        payload: {
          ...state.payload,
          ...action.payload,
        },
      }
    default:
      return state
  }
}

export default rootReducer
