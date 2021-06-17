import isEmpty from 'src/validations/isEmpty'
import {
  BRAND_URL,
  CHECK_SKU_UNIQUENESS_URL,
  CHECK_UPC_UNIQUENESS_URL,
  CHECK_ASIN_UNIQUENESS_URL,
  PRODUCT_URL,
  PRODUCT_VARIANT_URL,
} from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const addNewProduct = async (signal, body) => {
  try {
    return await requestWrapper(PRODUCT_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

export const searchProduct = async (signal, query) => {
  try {
    return await requestWrapper(
      '/api/product' + '?paginate=false' + query,
      'GET',
      signal
    )
  } catch (e) {
    throw e
  }
}

export const deleteProduct = async (id) => {
  try {
    return await requestWrapper(PRODUCT_URL + `${id}/`, 'DELETE')
  } catch (e) {
    throw e
  }
}

export const submitProductVariant = async (signal, body) => {
  try {
    return await requestWrapper(PRODUCT_VARIANT_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

export const deleteProductVariant = async (id) => {
  try {
    return await requestWrapper(PRODUCT_VARIANT_URL + `${id}/`, 'DELETE')
  } catch (e) {
    throw e
  }
}

export const getProductById = async (signal, query) => {
  try {
    return await requestWrapper(PRODUCT_URL + query, 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const updateProductById = async (signal, query, body) => {
  try {
    return await requestWrapper(
      PRODUCT_URL + query + '/',
      'PATCH',
      signal,
      body
    )
  } catch (e) {
    throw e
  }
}

export const getVariantById = async (signal, query) => {
  try {
    return await requestWrapper(PRODUCT_VARIANT_URL, 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const updateProductVariant = async (signal, query, body) => {
  try {
    return await requestWrapper(
      PRODUCT_VARIANT_URL + query,
      'PATCH',
      signal,
      body
    )
  } catch (e) {
    throw e
  }
}

export const getAllProducts = async (signal) => {
  try {
    return await requestWrapper(PRODUCT_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const getAllProducts2 = async (signal) => {
  try {
    return await requestWrapper(PRODUCT_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const checkSKUUniquess = async (signal, body) => {
  try {
    return await requestWrapper(CHECK_SKU_UNIQUENESS_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

export const checkUPCUniquess = async (signal, body) => {
  try {
    return await requestWrapper(CHECK_UPC_UNIQUENESS_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

export const checkASINUniquess = async (signal, body) => {
  try {
    return await requestWrapper(CHECK_ASIN_UNIQUENESS_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

const getGroupNameByID = (id, groups) => {
  return groups.find((group) => group.id === id).name.toUpperCase() + '_' || ''
}

const getBrandNameByID = (id, brands) => {
  return (
    brands.find((group) => group.id === id).shortcut_name.toUpperCase() + '-' ||
    ''
  )
}

export const getUniqueSKU = (signal, productData, brands) => {
  let brand = ''
  if (!isEmpty(productData.brand)) {
    brand = getBrandNameByID(productData.brand, brands)
  }
  let mpn = productData.mpn.toUpperCase().split(' ').join('_')
  let uom = 'PK1'
  let sku_ = brand + mpn + '-' + uom
  return sku_
}

export const getProductBrands = async (signal) => {
  try {
    return await requestWrapper(BRAND_URL, 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const getFilterProduct = async (query) => {
  try {
    return await requestWrapper(
      '/api/product' + '?paginate=false' + query,
      'GET'
    )
  } catch (e) {
    throw e
  }
}
