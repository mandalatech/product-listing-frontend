import { BUNDLE_URL } from 'src/constants/urls'
import { requestWrapper } from './requestWrapper'

export const addNewBundle = async (signal, body) => {
  try {
    return await requestWrapper(BUNDLE_URL, 'POST', signal, body)
  } catch (e) {
    throw e
  }
}
