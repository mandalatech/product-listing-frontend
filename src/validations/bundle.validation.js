import isEmpty from './isEmpty'

const validateBundleCreation = (bundleData) => {
  const errors = {}

  if (isEmpty(bundleData.name)) {
    errors.name = 'Bundle Name cant be empty.'
  }
  if (isEmpty(bundleData.bundleItems)) {
    errors.bundleItems =
      'Please populate the bundle items and respective quantity'
  }

  bundleData.bundleItems.forEach((bundleItem) => {
    const bundleItemError = {}
    if (isEmpty(bundleItem.product)) {
      bundleItemError.product = 'Product cant be empty.'
    }
    console.log('validation check', bundleItem.quantity)
    if (
      isEmpty(bundleItem.quantity) ||
      bundleItem.quantity === '' ||
      bundleItem.quantity === 0
    ) {
      bundleItemError.quantity = 'Quantity cant be empty or zero.'
    }
    if (!isEmpty) {
      errors[bundleItem.id] = bundleItemError
    }
  })

  let isValid = isEmpty(errors)
  return { isValid, errors }
}

export { validateBundleCreation }
