import { WAREHOUSE_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteWarehouse = async (signal, id) => {
  try {
    return await requestWrapper(WAREHOUSE_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const updateWarehouse = async (signal, id, payload) => {
  try {
    return await requestWrapper(
      WAREHOUSE_URL + `${id}/`,
      'PATCH',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}

export const getAllWarehouses = async (signal) => {
  try {
    return await requestWrapper(
      WAREHOUSE_URL + '?paginate=false',
      'GET',
      signal
    )
  } catch (e) {
    throw e
  }
}
