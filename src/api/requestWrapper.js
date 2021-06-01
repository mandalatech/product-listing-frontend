import { BASE_URL } from '../constants/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

export const requestWrapper = async (url, method, signal, body, header) => {
  try {
    // if (window.navigator.onLine) {
    const mainCall = async () => {
      return await fetch(`${BASE_URL}${url}`, {
        method: method,
        signal: signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    }
    var response = await mainCall()
    var json = await response.json()

    return { json, response }
    // } else {
    //   //no internet connection
    //   console.log('the app now is offline okay!')
    //   Toast.fire({
    //     icon: 'warning',
    //     title: ToastMessage('warning', 'You are offline'),
    //   })
    // }
  } catch (e) {
    throw e
  }
}
