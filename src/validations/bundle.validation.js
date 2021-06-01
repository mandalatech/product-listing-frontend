import isEmpty from './isEmpty'

const validateBundleCreation = (bundleData) => {
  const errors = {}

  if (isEmpty(bundleData.productOne)) {
    errors.productOne = 'First item of bundle cant be empty.'
  }
  if (isEmpty(bundleData.productTwo)) {
    errors.productTwo = 'Second item of bundle cant be empty.'
  }
  if (isEmpty(bundleData.bundleQuantity)) {
    errors.bundleQuantity = 'Bundle Quantity cant be left empty.'
  }
  if (
    !isEmpty(bundleData.productOne) &&
    !isEmpty(bundleData.productTwo) &&
    bundleData.productOne === bundleData.productTwo
  ) {
    errors.sameProductOnBundle = 'Bundled elements are same.'
  }

  let isValid = isEmpty(errors)
  return { isValid, errors }
}

export { validateBundleCreation }
