import React from 'react'

const ShoppingCart = (props) => {
  const { items, shoppingCart } = props
  console.log('shoppingCart: ', shoppingCart)
  const selectedItemIds = []
  let shoppingCartArray
  if (shoppingCart !== undefined) {
    shoppingCartArray = Object.entries(shoppingCart)
    for (let i = 0; i < shoppingCartArray.length; i++) {
      if (shoppingCartArray[i][1] > 0) {
        selectedItemIds.push(shoppingCartArray[i])
      }
    }
  }
  console.log('selectedItemIds: ', selectedItemIds)
  const orderSummary = selectedItemIds.length ? (
    selectedItemIds.map( id => (
      <li key={id[0]}>
        <h5>{items[id[0]-1].product}</h5>
      </li>
    ))
  ) : (
    <div>There are no items in your cart</div>
  )
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul>
              {orderSummary}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Continue shopping</button>
            <button type="button" className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart