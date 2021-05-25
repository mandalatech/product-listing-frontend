import * as productAction from './types/product'

const INITIAL_STATE = {
  isSimpleProduct: true,
  productname: '',
  group: '',
  description: '',
  short_description: '',
  manufacturer: '',
  brand: '',
  sku: '',
  mpn: '',
  upc: '',
  asin: '',

  images: [],

  weight_name: 'LB',
  major_weight: '',
  minor_weight: '',

  dimension_name: 'CM',
  height: '',
  length: '',
  width: '',

  mtitle: '',
  mdescription: '',
  mkeyword: '',

  errors: {},

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

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productAction.CHANGE_PRODUCT_TYPE:
      console.log('[TYPE]', action.payload)
      return { ...state, isSimpleProduct: action.value }
    case productAction.CHANGE_PRODUCT_INPUT:
      console.log('product input changed [product]', action.payload.name)
      return { ...state, [action.payload.name]: action.payload.value }
    case productAction.SET_PRODUCT_IMAGE_FILES:
      console.log(' image upload[iu] ', action.payload)
      return { ...state, images: action.payload }
    case productAction.ADD_PRODUCT_VARIANT:
      // let newvariant = state.variant.push(action.payload.newVariant)
      console.log('new[var]', action.payload)
      return {
        ...state,
        variantModel: action.payload.variant,
        variant: [...action.payload.newVariant],
        varientsData: [...action.payload.variantData],
      }
    case productAction.ADD_VARIANT_PRODUCT_STATE:
      console.log('new variant[var]', action.payload)
      return { ...state, varientsData: action.payload }
    case productAction.CHANGE_VARIANT_DATA:
      console.log(' variants change action [vvv] ', action.payload)
      let curVarientData = state.varientsData
      let curVariantIndex = curVarientData.findIndex(
        data => data.id === action.payload.id
      )
      console.log(' .... ', curVariantIndex)
      let curVarient = curVarientData[curVariantIndex]

      if (action.payload.name === 'variant_name') {
        curVarient.variant_name = action.payload.data
      } else if (action.payload.name === 'sku') {
        curVarient.sku = action.payload.data
      } else if (action.payload.name === 'mpn') {
        curVarient.mpn = action.payload.data
      } else if (action.payload.name === 'upc') {
        curVarient.upc = action.payload.data
      } else if (action.payload.name === 'asin') {
        curVarient.asin = action.payload.data
      } else if (action.payload.name === 'major_weight') {
        curVarient.major_weight = action.payload.data
      } else if (action.payload.name === 'minor_weight') {
        curVarient.minor_weight = action.payload.data
      } else {
        let curVarientKeys = Object.keys(curVarient)
        let curVarientValues = Object.values(curVarient)

        curVarientKeys.map((data, indd) => {
          if (data === action.payload.name) {
            console.log(' dataggg : ', data)
            return (curVarient = { ...curVarient, [data]: action.payload.data })
          }
        })
      }
      console.log(' current varientsData [vvv] ', state.varientsData)
      console.log(' changed variant data [vvv] ', curVarient)
      curVarientData[curVariantIndex] = curVarient
      return { ...state, varientsData: curVarientData }
    case productAction.SET_PRODUCT_ERRORS:
      return { ...state, errors: action.payload }
    case productAction.REMOVE_VARIANT:
      return { ...state, varientsData: action.payload }
    default:
      return state
  }
}

export default productReducer
