import { BUNDLE_URL } from 'src/constants/urls'
import { requestWrapper } from './requestWrapper'

export const addNewBundle = async (signal, body) => {
  try {
    return await requestWrapper(BUNDLE_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}

export const deleteBundle = async (signal, id) => {
  try {
    return await requestWrapper(BUNDLE_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const getAllBundles = async (signal) => {
  try {
    return await requestWrapper(BUNDLE_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}
