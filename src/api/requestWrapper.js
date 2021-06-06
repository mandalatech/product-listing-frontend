import { BASE_URL } from '../constants/index'
import store from '../store'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

export const requestWrapper = async (url, method, signal, body, header) => {
  try {
    console.log(' window.navigator.onLine ', window.navigator.onLine)
    if (window.navigator.onLine) {
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
