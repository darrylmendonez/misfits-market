import { combineReducers } from 'redux'

import itemReducer from './itemReducer'
// import shoppingCartReducer from './shoppingCartReducer'

const rootReducer = combineReducers({
  itemData: itemReducer,
  // shoppingCartData: shoppingCartReducer,
})

export default rootReducer