import { WAREHOUSE_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteWarehouse = async (signal, id) => {
  try {
    return await requestWrapper(WAREHOUSE_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}
