import { MANUFACTURER_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteManufacturer = async (signal, id) => {
  try {
    return await requestWrapper(MANUFACTURER_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const createManufacturer = async (signal, payload) => {
  try {
    return await requestWrapper(MANUFACTURER_URL, 'POST', signal, payload)
  } catch (e) {
    throw e
  }
}

export const updateManufacturer = async (signal, id, payload) => {
  try {
    return await requestWrapper(
      MANUFACTURER_URL + `${id}/`,
      'PATCH',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}

export const getAllManufacturers = async (signal) => {
  try {
    return await requestWrapper(
      MANUFACTURER_URL + '?paginate=false',
      'GET',
      signal
    )
  } catch (e) {
    throw e
  }
}
