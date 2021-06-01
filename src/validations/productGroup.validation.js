import isEmpty from 'src/validations/isEmpty'

const validateProductGroupCreation = (productGroupData) => {
  // For warehouses
  let productGroupsError = {}
  productGroupData.attributes.forEach((attributeOption) => {
    let attributeOptionError = {}
    if (isEmpty(attributeOption.name)) {
      attributeOptionError.name = 'Please enter attribute name.'
    }
    if (!isEmpty(attributeOptionError)) {
      productGroupsError[attributeOption.id] = attributeOptionError
    }
  })

  if (isEmpty(productGroupData.name)) {
    productGroupsError['name'] = 'Please provide product group name'
  }
  return productGroupsError
}

export default validateProductGroupCreation
