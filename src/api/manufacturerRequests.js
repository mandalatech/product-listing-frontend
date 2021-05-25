import { MANUFACTURER_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteManufacturer = async (signal, id) => {
  try {
    return await requestWrapper(MANUFACTURER_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}
