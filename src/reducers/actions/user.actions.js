import * as userTypes from 'src/reducers/types/user.types'

export const loginUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: userTypes.LOGIN_USER,
      payload: payload,
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: userTypes.LOGOUT_USER,
    })
  }
}
