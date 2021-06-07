import isEmpty from './isEmpty'

const validateProductCreation = (productData, autoSKU) => {
  const errors = {}

  if (isEmpty(productData.productname)) {
    errors.productname = 'Provide valid product name!'
  }
  if (productData.isSimpleProduct) {
    if (!autoSKU) {
      console.log('AUTO SKU', autoSKU)
      if (isEmpty(productData.sku)) {
        errors.sku = 'Provide SKU'
      }
    }
  }

  if (isEmpty(productData.inventoryType)) {
    errors.inventoryType = 'Provide inventory type'
  }
  if (isEmpty(productData.major_weight)) {
    errors.major_weight = 'Provide major weight'
  }
  if (isEmpty(productData.minor_weight)) {
    errors.minor_weight = 'Provide minor weight'
  }
  if (isEmpty(productData.description)) {
    errors.description = 'Provide some description!'
  }
  if (isEmpty(productData.short_description)) {
    errors.short_description = 'Provide some description!'
  }

  // For warehouses
  let warehousesError = {}
  productData.warehouses.forEach((warehouseOption) => {
    let warehouseOptionError = {}
    if (isEmpty(warehouseOption.warehouse)) {
      warehouseOptionError.warehouse = 'Please select warehouse.'
    }
    if (
      isEmpty(warehouseOption.quantity) ||
      warehouseOption.quantity === 0 ||
      warehouseOption.quantity === '0'
    ) {
      warehouseOptionError.quantity = 'Quantity cant be empty or zero.'
    }
    if (!isEmpty(warehouseOptionError)) {
      warehousesError[warehouseOption.id] = warehouseOptionError
    }
  })
  errors.warehouses = warehousesError
  console.log(
    ' productData.warehouses [err]1 ',
    errors,
    isEmpty(errors.warehouses)
  )
  let newObj
  // console.log(' productData.warehouses [err]3 ', newObj)
  if (isEmpty(errors.warehouses)) {
    delete errors.warehouses
  } else {
    newObj = Object.keys(errors.warehouses).reduce((acc, curr) => {
      if (Object.keys(errors.warehouses[curr]).length > 0)
        acc[curr] = errors.warehouses[curr]
      console.log('productData.warehouses [err]2', acc)
      return acc
    }, {})
    if (isEmpty(newObj)) {
      delete errors.warehouses
    }
  }
  console.log(' all product [err]3 ', errors, newObj)
  let isValid = isEmpty(errors)
  return { isValid, errors }
}

export { validateProductCreation }
