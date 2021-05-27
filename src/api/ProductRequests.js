import { PRODUCT_URL, PRODUCT_VARIANT_URL } from '../constants/urls'
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

export const getAllProducts = async (signal) => {
  try {
    return await requestWrapper(PRODUCT_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}
