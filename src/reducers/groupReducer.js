import * as groupAction from './types/group'

const INITIAL_STATE = {
  name: '',
  attributes: [],
}

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case groupAction.SET_GROUP_NAME:
      return { ...state, name: action.payload.value }
    case groupAction.SET_GROUP_ATTRIBUTE:
      return { ...state, attributes: action.payload }
    default:
      return state
  }
}

export default groupReducer
