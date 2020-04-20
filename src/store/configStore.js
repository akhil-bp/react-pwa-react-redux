import { createStore, combineReducers } from 'redux'
import { Data1, Data2 } from './reducers'

export default () => {
  const rootReducer = combineReducers({ Data1,Data2})
  return createStore(rootReducer)
}