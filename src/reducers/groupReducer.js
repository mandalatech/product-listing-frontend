import * as groupAction from './types/group'

const INITIAL_STATE = {
  name: '',
  attributes: [],
}

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case groupAction.SET_GROUP_NAME:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

export default groupReducer
