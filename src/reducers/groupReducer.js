import * as groupAction from './types/group'

const INITIAL_STATE = {
  name: '',
  attributes: [],
  errors: {},
}

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case groupAction.SET_GROUP_NAME:
      return { ...state, name: action.payload.value }
    case groupAction.SET_GROUP_ATTRIBUTE:
      return { ...state, attributes: action.payload }
    case groupAction.POPULATE_EXISTING_GROUP_ATTRIBUTES:
      return { ...state, attributes: action.payload }
    case groupAction.SET_GROUP_ERRORS:
      return { ...state, errors: action.payload }
    default:
      return state
  }
}

export default groupReducer
