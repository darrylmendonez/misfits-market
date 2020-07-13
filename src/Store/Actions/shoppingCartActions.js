export const incrementQuantity = id => {
  return {
    type: 'INCREMENT_QUANTITY',
    id
  }
}

export const decrementQuantity = id => {
  return {
    type: 'DECREMENT_QUANTITY',
    id
  }
}