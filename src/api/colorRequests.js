import { COLOR_URL } from '../constants/urls'
import { requestWrapper } from './requestWrapper'

export const deleteColor = async (signal, id) => {
  try {
    return await requestWrapper(COLOR_URL + `${id}/`, 'DELETE', signal)
  } catch (e) {
    throw e
  }
}

export const createColor = async (signal, payload) => {
  try {
    return await requestWrapper(COLOR_URL, 'POST', signal, payload)
  } catch (e) {
    throw e
  }
}

export const updateColor = async (signal, id, payload) => {
  try {
    return await requestWrapper(COLOR_URL + `${id}/`, 'PATCH', signal, payload)
  } catch (e) {
    throw e
  }
}

export const getAllColors = async (signal) => {
  try {
    return await requestWrapper(COLOR_URL + '?paginate=false', 'GET', signal)
  } catch (e) {
    throw e
  }
}
