import { DatatOneActions, DatataTwoActions } from './actions'

export const Data1 = (state = [], action) => {
  switch (action.type) {
    case DatatOneActions.ADD_DATA1:
      return [...state, action.data]
    case DatatOneActions.REMOVE_DATA1:
      return state.filter((msg, i) => i != action.data)
    case DatatOneActions.UPDATE_DATA1:
      let val = []
      state.forEach((data, i) => {
        if (action.data.index == i) {
          val.push(action.data.data)
        } else {
          val.push(data)
        }
      })
      state = val
      return state;
    default:
      return state
  }
}

export const Data2 = (state = [], action) => {
  switch (action.type) {
    case DatataTwoActions.ADD_DATA2:
      return [...state, action.message]
    case DatataTwoActions.REMOVE_DATA2:
      return state.filter(message => message != action.message)
    default:
      return state
  }
}