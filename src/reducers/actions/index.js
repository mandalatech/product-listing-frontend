import * as productAction from '../types/product'
import * as groupAction from '../types/group'
import * as inventoryAction from '../types/inventory'

export const setProductErrors = errors => {
  return dispatch => {
    dispatch({
      type: productAction.SET_PRODUCT_ERRORS,
      payload: errors,
    })
  }
}

export const clearAddProductData = () => {
  return dispatch => {
    dispatch({
      type: productAction.CLEAR_ADD_PRODUCT_FORM,
    })
  }
}

export const changeProductType = value => {
  const productType = value ? 'simple' : 'configurable'
  console.log('Change product [TYPE]: ', productType, ' : ', value)
  return dispatch => {
    dispatch({
      type: productAction.CHANGE_PRODUCT_TYPE,
      value: value,
    })
  }
}

export const changeProductInput = (name, data) => {
  return dispatch => {
    console.log(' change input [product]', name, data)
    dispatch({
      type: productAction.CHANGE_PRODUCT_INPUT,
      payload: { name: name, value: data },
    })
  }
}

export const changeProductExtrasInput = (name, data) => {
  return dispatch => {
    console.log(' change input [product extra]', name, data)
    dispatch({
      type: productAction.CHANGE_PRODUCT_EXTRAS_INPUT,
      payload: { name: name, value: data },
    })
  }
}

export const setAllProductInput = inputs => {
  return dispatch => {
    dispatch({
      type: productAction.SET_ALL_PRODUCT_INPUT,
      payload: inputs,
    })
  }
}

export const addProductVariant = (variant, newVariant, variantData) => {
  console.log(' new variant list [var] ', variantData)
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

export const removeVarient = variantData => {
  return dispatch => {
    dispatch({ type: productAction.REMOVE_VARIANT, payload: variantData })
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

export const updateProducts = products => {
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_PRODUCTS,
      payload: products,
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

export const updateColors = colors => {
  console.log('COLORS : ', colors)
  return dispatch => {
    dispatch({
      type: productAction.UPDATE_COLORS,
      payload: colors,
    })
  }
}

export const setProductImageFiles = image => {
  console.log(' image in action [image] ', image)
  return dispatch => {
    dispatch({ type: productAction.SET_PRODUCT_IMAGE_FILES, payload: image })
  }
}

export const updateProductImageFile = image => {
  return dispatch => {
    dispatch({ type: productAction.UPDATE_PRODUCT_IMAGE, payload: image })
  }
}

export const setProductGroupName = data => {
  return dispatch => {
    dispatch({
      type: groupAction.SET_GROUP_NAME,
      payload: { value: data },
    })
  }
}

export const setProductGroupAttributes = payload => {
  return dispatch => {
    dispatch({
      type: groupAction.SET_GROUP_ATTRIBUTE,
      payload: payload,
    })
  }
}

export const setInventoryWarehouseOptions = payload => {
  return dispatch => {
    dispatch({
      type: inventoryAction.SET_WAREHOUSE_WAREHOUSE_OPTION,
      payload: payload,
    })
  }
}

export const setVariantError = error => {
  return dispatch => {
    dispatch({
      type: productAction.SET_VARIANT_ERROR,
      payload: error,
    })
  }
}

export const setVariantModel = model => {
  return dispatch => {
    dispatch({
      type: productAction.SET_VARIANT_MODAL,
      payload: model,
    })
  }
}

export const setProductList = products => {
  return dispatch => {
    dispatch({
      type: productAction.SET_PRODUCT_LIST,
      payload: products,
    })
  }
}

export const clearProductExtrasInput = () => {
  return (dispatch) => {
    dispatch({
      type: productAction.CLEAR_PRODUCT_EXTRAS_INPUT,
    })
  }
}

// export const automaticLogout = () => (dispatch) => { }
