import * as userTypes from 'src/reducers/types/user.types'

const initialState = {
  isAuthenticated: false,
  token: '',
  userName: '',
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: payload.status,
        token: payload.token,
        userName: payload.userName,
      }
    case userTypes.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        userName: '',
      }
    default:
      return state
  }
}

export default userReducer
