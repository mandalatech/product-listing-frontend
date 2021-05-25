import { BRAND_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteBrand = async (signal, id) => {
  try {
    return await requestWrapper(BRAND_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}
