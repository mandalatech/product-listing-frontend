import * as actionTypes from './types/product'
import * as layoutActionTypes from './types/layout'

const initialState = {
  sidebarShow: 'responsive',
  sideBarStatus: false,
  deviceResponsiveInfo: {},
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
    case actionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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
    case layoutActionTypes.SET_SIDE_BAR_STATUS:
      return {
        ...state,
        sideBarStatus: action.payload,
      }
    case layoutActionTypes.SET_DEVICE_RESPONSIVE_INFO:
      return {
        ...state,
        deviceResponsiveInfo: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
