import {
  PRODUCT_GROUP_ATTRIBUTE_URL,
  PRODUCT_GROUP_FIELDS_URL,
  PRODUCT_GROUP_URL,
} from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteProductGroup = async (signal, id) => {
  try {
    return await requestWrapper(PRODUCT_GROUP_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const createProductGroup = async (signal, payload) => {
  try {
    return await requestWrapper(PRODUCT_GROUP_URL, 'POST', signal, payload)
  } catch (e) {
    throw e
  }
}

export const createProductGroupAttribute = async (signal, payload) => {
  try {
    return await requestWrapper(
      PRODUCT_GROUP_ATTRIBUTE_URL,
      'POST',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}

export const associateGroupWithAttribute = async (signal, payload) => {
  try {
    return await requestWrapper(
      PRODUCT_GROUP_FIELDS_URL,
      'POST',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}

export const getAllProductGroups = async (signal) => {
  try {
    return await requestWrapper(
      PRODUCT_GROUP_URL + '?paginate=false',
      'GET',
      signal
    )
  } catch (e) {
    throw e
  }
}

export const updateProductGroupAttribute = async (signal, id, payload) => {
  try {
    return await requestWrapper(
      PRODUCT_GROUP_ATTRIBUTE_URL + `${id}/`,
      'PUT',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}
