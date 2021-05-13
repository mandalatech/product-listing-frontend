import axios from 'axios'
import { BASE_URL } from './../constants/index'

const _axios = axios.create({
  baseURL: BASE_URL,
})

const callAPI = async (url, method = 'get', data) => {
  return await _axios({
    method: method,
    url: url,
    data: data,
  })
    .then((res) => res.data)
    .catch((err) => err)
}

export default callAPI
