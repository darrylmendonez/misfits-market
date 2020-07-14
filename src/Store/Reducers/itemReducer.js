const initState = {
  items: [],
  shoppingCart: {},
  orderSummaryDetails: {
    totalNumberOfItems: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  },
  userPurchased: false
}

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INITIAL_ITEMS':
      return {
        ...state,
        items: action.items,
        shoppingCart: action.shoppingCart,
        orderSummaryDetails: {
          totalNumberOfItems: 0,
          tax: 0,
          shipping: 0,
          total: 0,
        }
      }
    case 'INCREMENT_QUANTITY':
      let incrementedCart = state.shoppingCart
      incrementedCart[action.id]++
      let incrementedSummary = state.orderSummaryDetails
      incrementedSummary.totalNumberOfItems++
      incrementedSummary.total = parseFloat( (state.orderSummaryDetails.total + state.items[action.id-1].price).toFixed(2) )
      let incrementedItems = state.items
      incrementedItems[action.id-1].justAdded = true
      return {
        ...state,
        items: [ ...incrementedItems ],
        shoppingCart: { ...incrementedCart },
        orderSummaryDetails: { ...incrementedSummary },
        userPurchased: false,
      }
      case 'DECREMENT_QUANTITY':
        let decrementedCart = state.shoppingCart
        decrementedCart[action.id]--
        let decrementedSummary = state.orderSummaryDetails
        decrementedSummary.totalNumberOfItems--
        decrementedSummary.total = parseFloat( (state.orderSummaryDetails.total - state.items[action.id-1].price).toFixed(2) )
        return {
          ...state,
          shoppingCart: { ...decrementedCart },
          orderSummaryDetails: decrementedSummary
        }
      case 'HIDE_CONFIRMATION_MSG':
        let hidingConfirmationMsg = state.items
        hidingConfirmationMsg[action.id-1].justAdded = false
        return {
          ...state,
          items: [ ...hidingConfirmationMsg ],
        }
      case 'USER_PURCHASED_TRUE':
        return {
          ...state,
          userPurchased: true,
        }
    default:
      return state
  }
}

export default itemReducer