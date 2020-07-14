import { combineReducers } from 'redux'

import itemReducer from './itemReducer'

const rootReducer = combineReducers({
  itemData: itemReducer,
})

export default rootReducer