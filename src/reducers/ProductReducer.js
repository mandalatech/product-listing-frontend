import * as productAction from './types/product'
import { cilTablet } from '@coreui/icons'
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
      // let newvariant = state.variant.push(action.payload.newVariant)
      // console.log('new[var]', action.payload.newVariant)
      return {
        ...state,
        variantModel: action.payload.variant,
        variant: [...action.payload.newVariant],
        varientsData: [...action.payload.variantData],
      }
    case productAction.ADD_VARIANT_PRODUCT_STATE:
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
        // console.log(' vuvuvu : ', Object.keys(curVarient))
        let curVarientKeys = Object.keys(curVarient)
        let curVarientValues = Object.values(curVarient)
        console.log(' currpsdfas ', curVarientValues)
        curVarientKeys.map((data, indd) => {
          console.log(' dadadafff : ', data)
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
    default:
      return state
  }
}
