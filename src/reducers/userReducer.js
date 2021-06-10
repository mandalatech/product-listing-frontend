import * as userTypes from 'src/reducers/types/user.types'

const initialState = {
  userID: null,
  isAuthenticated: false,
  token: '',
  email: '',
  first_name: '',
  last_name: '',
  message: '',
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        userID: payload.userID,
        isAuthenticated: true,
        token: payload.token,
        email: payload.email,
        first_name: payload.first_name,
        last_name: payload.last_name,
        message: 'Login successful.',
      }
    case userTypes.LOGOUT_USER:
      return {
        ...initialState,
        message: 'User logged out.',
      }
    case userTypes.LOGIN_ERROR:
      return {
        ...initialState,
        message: 'Invalid credentials.',
      }
    case userTypes.CLEAR_USER_MESSAGE:
      return {
        ...state,
        message: '',
      }
    case userTypes.UPDATE_USER_DETAIL:
      return {
        ...state,
        email: payload.email,
        first_name: payload.first_name,
        last_name: payload.last_name,
        userID: payload.id,
      }
    default:
      return state
  }
}

export default userReducer
