import * as actionTypes from './types/product'
import * as layoutActionTypes from './types/layout'
import * as bundleTypes from './types/bundle'

const initialState = {
  sidebarShow: 'responsive',
  sideBarStatus: false,
  deviceResponsiveInfo: {},
  productGroups: [],
  // brands: [],
  // manufacturers: [],
}

const rootReducer = (state = initialState, action) => {
  console.log(' init action ', action)
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
    case actionTypes.UPDATE_COLORS:
      return {
        ...state,
        colors: action.payload,
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
    case bundleTypes.UPDATE_BUNDLES:
      return {
        ...state,
        bundles: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
