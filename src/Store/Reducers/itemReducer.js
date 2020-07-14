const initState = {
  items: [],
  shoppingCart: {},
  orderSummaryDetails: {
    totalNumberOfItems: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  }
}

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INITIAL_ITEMS':
      return {
        ...state,
        items: action.items,
        shoppingCart: action.shoppingCart,
      }
    case 'INCREMENT_QUANTITY':
      let incrementedCart = state.shoppingCart
      incrementedCart[action.id]++
      let incrementedSummary = state.orderSummaryDetails
      incrementedSummary.totalNumberOfItems++
      incrementedSummary.total = parseFloat( (state.orderSummaryDetails.total + state.items[action.id-1].price).toFixed(2) )
      return {
        ...state,
        shoppingCart: { ...incrementedCart },
        orderSummaryDetails: { ...incrementedSummary }
      }
      case 'DECREMENT_QUANTITY':
        let decrementedCart = state.shoppingCart
        decrementedCart[action.id]--
        let decrementedSummary = state.orderSummaryDetails
        decrementedSummary.totalNumberOfItems--
        return {
          ...state,
          shoppingCart: { ...decrementedCart },
          orderSummaryDetails: decrementedSummary
        }
    default:
      return state
  }
}

export default itemReducer