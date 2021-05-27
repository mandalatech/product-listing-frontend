import { requestWrapper } from 'src/api/requestWrapper'
import { SKU_URL } from 'src/constants/urls'

export const getSKUSetting = async () => {
  try {
    return await requestWrapper(SKU_URL, 'get')
  } catch (e) {
    throw e
  }
}

export const updateSKUSetting = async (signal, payload) => {
  try {
    return await requestWrapper(SKU_URL + '1/', 'put', signal, payload)
  } catch (e) {
    throw e
  }
}
