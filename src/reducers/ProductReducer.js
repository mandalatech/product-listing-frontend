import * as productAction from './types/product'
const INITIAL_STATE = {
  productname: '',
  group: 0,
  description: '',
  short_description: '',
  manufacturer: 0,
  brand: 0,
  sku: '',
  mpn: '',
  upc: '',
  asin: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productAction.PRODUCT_INPUT_CHANGE:
      console.log('product input changed [product]', action.payload)
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
