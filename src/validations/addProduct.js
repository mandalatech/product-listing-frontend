import isEmpty from './isEmpty'

const validateProductCreation = (productData) => {
  const errors = {}

  if (isEmpty(productData.productname)) {
    errors.productname = 'Provide valid product name!'
  }
  if (isEmpty(productData.group)) {
    errors.group = 'Select a product group!'
  }
  if (isEmpty(productData.manufacturer)) {
    errors.manufacturer = 'Select a manufacturer!'
  }
  if (isEmpty(productData.brand)) {
    errors.brand = 'Select a brand!'
  }
  if (productData.isSimpleKeyword) {
    if (isEmpty(productData.sku)) {
      errors.sku = 'Provide valid sku!'
    }
    if (isEmpty(productData.mpn)) {
      errors.mpn = 'Provide valid mpn!'
    }
    if (isEmpty(productData.upc)) {
      errors.upc = 'Provide valid upc!'
    }
    if (isEmpty(productData.asin)) {
      errors.asin = 'Provide valid asin!'
    }
  }
  if (isEmpty(productData.major_weight)) {
    errors.major_weight = 'Provide major weight'
  }
  if (isEmpty(productData.minor_weight)) {
    errors.minor_weight = 'Provide minor weight'
  }
  if (isEmpty(productData.height)) {
    errors.height = 'Provide valid height!'
  }
  if (isEmpty(productData.length)) {
    errors.length = 'Provide valid length!'
  }
  if (isEmpty(productData.width)) {
    errors.width = 'Provide valid width!'
  }
  if (isEmpty(productData.description)) {
    errors.description = 'Provide some description!'
  }
  if (isEmpty(productData.short_description)) {
    errors.short_description = 'Provide some description!'
  }
  if (isEmpty(productData.mtitle)) {
    errors.mtitle = 'Provide some meta titles!'
  }
  if (isEmpty(productData.mdescription)) {
    errors.mdescription = 'Provide some meta description!'
  }
  if (isEmpty(productData.mkeyword)) {
    errors.mkeyword = 'Provide some meta keywords!'
  }

  let isValid = isEmpty(errors)
  return { isValid, errors }
}

export { validateProductCreation }
