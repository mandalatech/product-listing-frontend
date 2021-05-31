import isEmpty from './isEmpty'
import store from '../store'

const validateVariantData = variantData => {
  const errors = {}
  let skuSetting = store.getState().settings.sku
  console.log(' sku setting ', skuSetting)
  if (isEmpty(variantData.mpn)) {
    errors.mpn = '*MPN!!'
    errors.id = variantData.id
  }
  if (isEmpty(variantData.sku) && !skuSetting) {
    errors.sku = '*SKU'
    errors.id = variantData.id
  }
  if (isEmpty(variantData.name)) {
    errors.name = '*Name'
    errors.id = variantData.id
  }
  //   if(isEmpty(variantData.upc)){
  //     errors.upc = '*UPC'
  //     errors.id = variantData.id
  //   }
  //   if(isEmpty(variantData.asin)){
  //     errors.asin = '*ASIN'
  //     errors.id = variantData.id
  //   }
  if (isEmpty(variantData.major_weight)) {
    errors.major_weight = '*Major weight'
    errors.id = variantData.id
  }
  if (isEmpty(variantData.minor_weight)) {
    errors.minor_weight = '*Minor weight'
    errors.id = variantData.id
  }

  let isValid = isEmpty(errors)
  return { isValid, errors }
}

export { validateVariantData }
