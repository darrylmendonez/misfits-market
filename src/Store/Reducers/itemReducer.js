const initState = {}

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INITIAL_ITEMS':
      return {
        items: action.items,
        shoppingCart: action.shoppingCart,
      }
    case 'INCREMENT_QUANTITY':
      let newShoppingCart = state.shoppingCart
      console.log('newShoppingCart: ', newShoppingCart)
      newShoppingCart[action.id]++
      return {
        ...state,
        shoppingCart: { ...newShoppingCart }
      }
      case 'DECREMENT_QUANTITY':
        let copyShoppingCart = state.shoppingCart
        console.log('copyShoppingCart: ', copyShoppingCart)
        copyShoppingCart[action.id]--
        return {
          ...state,
          shoppingCart: { ...copyShoppingCart }
        }
    case 'DELETE_ITEM':
      let remainingItems = state.items.filter(item => {
        return action.id !== item.id
      })
      return {
        ...state,
        items: remainingItems
      }
    default:
      return state
  }
}

export default itemReducer