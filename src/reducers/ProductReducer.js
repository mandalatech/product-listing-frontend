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

  images: [],

  weight_name: 'LB',
  major_weight: 0,
  minor_weight: 0,

  dimension_name: 'CM',
  height: 0,
  length: 0,
  width: 0,

  title: '',
  description: '',
  keyword: '',

  variantModel: [
    'ID',
    'Image',
    'Variant Name',
    'SKU',
    'MPN',
    'UPC',
    'ASIN',
    'Major weight',
    'Minor weight',
  ],
  variant: [],
  varientsData: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productAction.PRODUCT_INPUT_CHANGE:
      console.log('product input changed [product]', action.payload)
      return { ...state, [action.payload.name]: action.payload.value }
    case productAction.SET_PRODUCT_IMAGE_FILES:
      console.log(' image upload[iu] ', action.payload)
      return { ...state, images: action.payload }
    case productAction.ADD_PRODUCT_VARIANT:
      return { ...state, variant: action.payload }
    case productAction.ADD_VARIANT_PRODUCT_STATE:
      return { ...state, varientsData: action.payload }
    default:
      return state
  }
}
