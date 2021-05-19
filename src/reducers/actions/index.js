import * as productAction from '../types/product'

export const changeProductInput = (name, data) => {
  return dispatch => {
    console.log(' change input [product]', name, data)
    dispatch({
      type: productAction.PRODUCT_INPUT_CHANGE,
      payload: { name: name, value: data },
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
