import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  LOGOUT_URL,
  LOGS_URL,
  USER_DETAIL_URL,
} from 'src/constants/urls'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { BASE_URL } from '../constants/index'
import store from '../store'

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

export const forgotPasswordUserRequest = async (signal, payload) => {
  try {
    return await noAuthRequestWrapper(
      FORGOT_PASSWORD_URL,
      'POST',
      signal,
      payload
    )
  } catch (e) {
    throw e
  }
}

export const tokenRequestWrapper = async (signal, method, token, url, body) => {
  try {
    const mainCall = async () => {
      return await fetch(`${BASE_URL}${url}`, {
        method: method,
        signal: signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
        body: JSON.stringify(body),
      })
    }
    var response = await mainCall()
    var json = await response.json()
    return { json, response }
  } catch (e) {
    throw e
  }
}

export const getUserDetails = async (signal, token) => {
  try {
    return await tokenRequestWrapper(signal, 'GET', token, USER_DETAIL_URL)
  } catch (e) {
    throw e
  }
}

export const getUserLogs = async (signal, token) => {
  try {
    return await tokenRequestWrapper(signal, 'GET', token, LOGS_URL)
  } catch (e) {
    throw e
  }
}
