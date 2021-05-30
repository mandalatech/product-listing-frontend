import {
  PRODUCT_URL,
  PRODUCT_VARIANT_URL,
  CHECK_SKU_UNIQUENESS_URL,
  MANUFACTURER_URL,
  BRAND_URL,
} from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const addNewProduct = async (signal, body) => {
  try {
    return await requestWrapper(PRODUCT_URL, 'POST', signal, body)
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

export const getAllProducts = async signal => {
  try {
    return await requestWrapper(PRODUCT_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const getAllProducts2 = async signal => {
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

export const recursiveCheckSKUUniqueness = async (
  signal,
  sku,
  seedRandomizer
) => {
  const payload = { sku: sku }
  console.log('[SKU FOR UNIQUENESS]', payload)
  checkSKUUniquess(signal, payload).then(({ json, response }) => {
    if (response.ok) {
      if (json.unique) {
        console.log('[SKU FOR UNIQUENESS RESPONSE]', json)
        return json.sku
      } else {
        seedRandomizer++
        return recursiveCheckSKUUniqueness(signal, sku + seedRandomizer)
      }
    } else {
      return null
    }
  })
}

export const getUniqueSKU = (signal, productData) => {
  // const title = productData.productname
  // const uniqueSKU = recursiveCheckSKUUniqueness(signal, title, 1)
  // console.log('GET UNIQUE SKU', uniqueSKU)
  // return uniqueSKU
  return Math.floor(Math.random() * 100000000 + 1)
}

export const getProductBrands = async signal => {
  try {
    return await requestWrapper(BRAND_URL, 'GET', signal)
  } catch (e) {
    throw e
  }
}

export const getFilterProduct = async query => {
  try {
    return await requestWrapper(
      '/api/product' + '?paginate=false&' + query,
      'GET'
    )
  } catch (e) {
    throw e
  }
}
