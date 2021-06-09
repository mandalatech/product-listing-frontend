import { BASE_URL } from '../constants/index'
import store from '../store'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { LOGIN_URL, LOGOUT_URL, USER_DETAIL_URL } from 'src/constants/urls'

export const noAuthRequestWrapper = async (
  url,
  method,
  signal,
  body,
  header
) => {
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

export const loginUserRequest = async (signal, payload) => {
  try {
    return await noAuthRequestWrapper(LOGIN_URL, 'POST', signal, payload)
  } catch (e) {
    throw e
  }
}

export const logoutUserRequest = async (signal) => {
  try {
    return await noAuthRequestWrapper(LOGOUT_URL, 'POST', signal)
  } catch (e) {
    throw e
  }
}

export const getUserDetails = async (signal, token) => {
  try {
    const mainCall = async () => {
      return await fetch(`${BASE_URL}${USER_DETAIL_URL}`, {
        method: 'GET',
        signal: signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
      })
    }
    var response = await mainCall()
    var json = await response.json()
    return { json, response }
  } catch (e) {
    throw e
  }
}
