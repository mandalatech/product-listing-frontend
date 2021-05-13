import * as actionTypes from './actions'

const initialState = {
  sidebarShow: 'responsive',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_GROUP:
      return {
        ...state,
        productGroups: action.payload,
      }
    case actionTypes.UPDATE_BRANDS:
      return {
        ...state,
        brands: action.payload,
      }
    case actionTypes.UPDATE_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
