import * as actionTypes from './actions'

const initialState = {
  sidebarShow: 'responsive',
  sideBarStatus: true,
}

export default (state = initialState, action) => {
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
    case actionTypes.UPDATE_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload,
      }
    case actionTypes.SET_SIDE_BAR_STATUS:
      return {
        ...state,
        sideBarStatus: !state.sideBarStatus,
      }
    default:
      return state
  }
}

// export default rootReducer
