import axios from 'axios'
import { BASE_URL } from './../constants/index'

const callAPI = async (url, method = 'get', data) => {
  return await axios({
    method: method,
    url: BASE_URL + url,
    data: data,
  })
    .then((res) => res.data)
    .catch((err) => err)
}

export default callAPI
