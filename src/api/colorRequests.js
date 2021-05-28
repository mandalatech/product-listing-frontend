import { COLOR_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteColor = async (signal, id) => {
  try {
    return await requestWrapper(COLOR_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}
