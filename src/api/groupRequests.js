import { PRODUCT_GROUP_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteProductGroup = async (signal, id) => {
  try {
    return await requestWrapper(PRODUCT_GROUP_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}
