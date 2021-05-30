import * as productAction from './types/product'
import * as inventoryAction from './types/inventory'

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

  inventoryType: '',

  warehouses: [],
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
  variantErrors: [],
  errors: {},
  extras: {},

  variantModel: [
    'ID',
    'Image',
    'Name',
    'SKU',
    'MPN',
    'UPC',
    'ASIN',
    'Major weight',
    'Minor weight',
  ],
  variant: [],
  varientsData: [],

  productList: [],
}

const productReducer = (state = INITIAL_STATE, action) => {
  console.log(' actions [imagee] ', action)
  switch (action.type) {
    case productAction.CHANGE_PRODUCT_TYPE:
      console.log('[TYPE]', action.payload)
      return { ...state, isSimpleProduct: action.value }
    case productAction.SET_WAREHOUSE:
      console.log(' set warehouse ', state.warehouses)
      return { ...state, warehouses: action.payload }
    case productAction.SET_DEFAULTS:
      console.log(' set defaults : ', state)
      return {
        ...state,
        varientsData: [],
        variant: [],
        variantModel: [
          'ID',
          'Image',
          'Name',
          'SKU',
          'MPN',
          'UPC',
          'ASIN',
          'Major weight',
          'Minor weight',
        ],
        errors: {},
        variantErrors: [],
        extras: {},
      }
    case productAction.UPDATE_PRODUCT_IMAGE:
      const updatedImage = state.images.concat(action.payload)
      console.log('updated[imagee]', updatedImage)
      return { ...state, images: updatedImage }
    case productAction.SET_PRODUCT_LIST:
      console.log(' productList [product-list] ', action.payload)
      return { ...state, productList: action.payload }
    case productAction.SET_VARIANT_ERROR:
      console.log(' variant errors [varient-validation]', action.payload)
      return { ...state, variantErrors: action.payload }
    case productAction.SET_ALL_PRODUCT_INPUT:
      console.log(' action.payload [edit] ', action.payload)
      let vars = action.payload.variants
      if (action.payload.variants.length !== 0) {
        vars = action.payload.variants.map((data, index) => {
          return { ...data, image: [{ image: { ...data.image } }] }
        })
      }
      let whs = []
      if (action.payload.warehouses.length !== 0) {
        whs = action.payload.warehouses.map((data, index) => {
          return {
            id: data.id,
            warehouse: data.warehouse,
            stock: data.quantity,
          }
        })
      }
      console.log(' whs ', whs)
      console.log(' vars ', vars)
      // console.log('filtered images :', filImages)
      return {
        ...state,
        productname: action.payload.title || '',
        group: action.payload.product_group || '',
        description: action.payload.description || '',
        short_description: action.payload.short_description || '',
        manufacturer: action.payload.manufacturer || '',
        brand: action.payload.brand || '',
        sku: action.payload.sku || '',
        mpn: action.payload.mpn || '',
        upc: action.payload.upc || '',
        asin: action.payload.asin || '',
        varientsData: vars || [],
        inventoryType:
          (action.payload.inventory && action.payload.inventory.type) || [],

        warehouses: whs || [],
        images: [...action.payload.images] || [],

        weight_name:
          (action.payload.weight && action.payload.weight.weight_name) || '',
        major_weight:
          (action.payload.weight && action.payload.weight.major_weight) || '',
        minor_weight:
          (action.payload.weight && action.payload.weight.minor_weight) || '',

        dimension_name:
          (action.payload.dimension &&
            action.payload.dimension.dimension_name) ||
          '',
        height:
          (action.payload.dimension && action.payload.dimension.height) || '',
        length:
          (action.payload.dimension && action.payload.dimension.length) || '',
        width:
          (action.payload.dimension && action.payload.dimension.width) || '',

        mtitle: (action.payload.meta && action.payload.meta.title) || '',
        mdescription:
          (action.payload.meta && action.payload.meta.description) || '',
        mkeyword: (action.payload.meta && action.payload.meta.keyword) || '',
        extras_with_attributes: action.payload.extras || [],
      }
    case productAction.CHANGE_PRODUCT_INPUT:
      console.log('product input changed [product]', action.payload.name)
      return { ...state, [action.payload.name]: action.payload.value }
    case productAction.CLEAR_PRODUCT_EXTRAS_INPUT:
      return {
        ...state,
        extras: {},
      }
    case productAction.CHANGE_PRODUCT_EXTRAS_INPUT:
      console.log('product extras input changed [product]', action.payload.name)
      return {
        ...state,
        extras: {
          ...state.extras,
          [action.payload.name]: action.payload.value,
        },
      }
    case productAction.SET_PRODUCT_IMAGE_FILES:
      console.log(' image upload[image] ', action.payload)
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

      if (action.payload.name === 'name') {
        curVarient.name = action.payload.data
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
    case productAction.SET_VARIANT_MODAL:
      return { ...state, variantModel: action.payload }
    case productAction.REMOVE_VARIANT:
      return { ...state, varientsData: action.payload }
    case inventoryAction.SET_WAREHOUSE_OPTION:
      return { ...state, warehouses: action.payload }
    case productAction.CLEAR_ADD_PRODUCT_FORM:
      return {
        ...state,
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

        inventoryType: '',

        warehouses: [],
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
        varientsData: [],
        variant: [],
      }
    default:
      return state
  }
}

export default productReducer
