import { BASE_URL } from '../constants/index'
import store from '../store'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import isEmpty from 'src/validations/isEmpty'
import toast from 'react-hot-toast'
import { VALIDATE_TOKEN_URL } from 'src/constants/urls'

export const requestWrapper = async (url, method, signal, body, header) => {
  try {
    if (window.navigator.onLine) {
      const token = localStorage.getItem('productListingUserKey')
      const mainCall = async () => {
        return await fetch(`${BASE_URL}${url}`, {
          method: method,
          signal: signal,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(body),
        })
      }
      if (isEmpty(token)) {
        toast.error('Empty token supplied.')
        window.location.replace('/')
      } else {
        const isTokenValidResponse = await fetch(
          `${BASE_URL}${VALIDATE_TOKEN_URL}`,
          {
            method: 'POST',
            signal: signal,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: token,
            }),
          }
        )
        if (isTokenValidResponse.ok) {
          var response = await mainCall()
          var json = await response.json()
          return { json, response }
        } else {
          const responseMsg = await isTokenValidResponse.json()
          toast.error('Invalid token supplied.')
          window.location.replace('/')
          return {
            response: isTokenValidResponse,
            json: responseMsg,
          }
        }
      }
    } else {
      console.log('the app now is offline okay!')
      store.dispatch({ type: 'SET_LOADER', payload: false })
      Toast.fire({
        icon: 'error',
        title: ToastMessage('error', 'You are offline'),
      })
    }
  } catch (e) {
    throw e
  }
}
