import * as groupAction from './types/group'

const INITIAL_STATE = {
  name: '',
  attributes: [],
  existingAttributes: [],
  errors: {},
  selectedGroupID: null,
}

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case groupAction.CLEAR_GROUP_NAME:
      return { ...state, name: '' }
    case groupAction.SET_GROUP_NAME:
      return { ...state, name: action.payload.value }
    case groupAction.SET_GROUP_ATTRIBUTE:
      return { ...state, attributes: action.payload }
    case groupAction.POPULATE_EXISTING_GROUP_ATTRIBUTES:
      return { ...state, existingAttributes: action.payload }
    case groupAction.SET_GROUP_ERRORS:
      return { ...state, errors: action.payload }
    case groupAction.CLEAR_GROUP_ERRORS:
      return { ...state, errors: {} }
    case groupAction.CLEAR_GROUP_ATTRIBUTES:
      return { ...state, attributes: [] }
    case groupAction.SET_SELECTED_GROUP_ID:
      return { ...state, selectedGroupID: action.payload.value }
    default:
      return state
  }
}

export default groupReducer
