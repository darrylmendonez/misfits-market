const initState = {}

const shoppingCartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INITIAL_CART':
      return {
        items: action.items
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

export default shoppingCartReducer