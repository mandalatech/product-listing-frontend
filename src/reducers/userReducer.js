import * as userTypes from 'src/reducers/types/user.types'

const initialState = {
  isAuthenticated: true,
  token: '',
  userName: '',
  message: '',
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: payload.status,
        token: payload.token,
        userName: payload.userName,
        message: 'Logged In Successfully',
      }
    case userTypes.LOGOUT_USER:
      return {
        ...initialState,
        message: 'Logged Out Successfully',
      }
    default:
      return state
  }
}

export default userReducer
