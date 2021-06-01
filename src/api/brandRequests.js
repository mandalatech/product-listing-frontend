import { BRAND_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteBrand = async (signal, id) => {
  try {
    return await requestWrapper(BRAND_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const createBrand = async (signal, payload) => {
  try {
    return await requestWrapper(BRAND_URL, 'POST', signal, payload)
  } catch (e) {
    throw e
  }
}

export const updateBrand = async (signal, id, payload) => {
  try {
    return await requestWrapper(BRAND_URL + `${id}/`, 'PATCH', signal, payload)
  } catch (e) {
    throw e
  }
}

export const getAllBrands = async (signal) => {
  try {
    return await requestWrapper(BRAND_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}
