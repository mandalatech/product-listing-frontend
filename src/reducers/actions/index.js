import * as productAction from '../types/product'
import store from 'src/store'

export const changeProductInput = (name, data) => {
  return dispatch => {
    console.log(' change input [product]', name, data)
    dispatch({
      type: productAction.PRODUCT_INPUT_CHANGE,
      payload: { name: name, value: data },
    })
  }
}

export const addProductVariant = (variant, newVariant, variantData) => {
  console.log(' new variant list [var] ', newVariant)
  return dispatch => {
    dispatch({
      type: productAction.ADD_PRODUCT_VARIANT,
      payload: {
        variant: variant,
        newVariant: newVariant,
        variantData: variantData,
      },
    })
  }
}

export const addVriantProductState = data => {
  return dispatch => {
    dispatch({ type: productAction.ADD_VARIANT_PRODUCT_STATE, payload: data })
  }
}

export const onVariantValueChange = (name, data, id) => {
  console.log('.-', id)
  return dispatch => {
    dispatch({
      type: productAction.CHANGE_VARIANT_DATA,
      payload: { name: name, data: data, id: id },
    })
  }
}

export const updateManufacturers = groups => {
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_MANUFACTURERS,
      payload: groups,
    })
  }
}

export const updateBrands = groups => {
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_BRANDS,
      payload: groups,
    })
  }
}

export const updateProductGroups = groups => {
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_PRODUCT_GROUP,
      payload: groups,
    })
  }
}

export const updateWarehouses = warehouses => {
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_WAREHOUSES,
      payload: warehouses,
    })
  }
}

export const setProductImageFiles = image => {
  console.log(' image in action [iu] ', image)
  return dispatch => {
    dispatch({ type: productAction.SET_PRODUCT_IMAGE_FILES, payload: image })
  }
}
