import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShoppingCart extends Component {
  render() {
    const { items, shoppingCart, orderSummaryDetails } = this.props
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
        <li className="list-group-item" key={id[0]-1}>
          <h6>{items[id[0]-1].product}</h6>
          <span>Qty: {id[1]}</span><br/>
          <span>${items[id[0]-1].price} each</span><span className="pull-right">Price: ${(items[id[0]-1].price * id[1]).toFixed(2)}</span>
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
              <h6 className="modal-title" id="exampleModalLabel">Order Summary</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {orderSummary}
                <li className="list-group-item">
                  <span className="pull-right">Shipping & handling: ${orderSummaryDetails.shipping.toFixed(2)}</span><br/>
                  <span className="pull-right">Tax: ${orderSummaryDetails.tax.toFixed(2)}</span><br/>
                  <strong className="pull-right">Total ({orderSummaryDetails.totalNumberOfItems} items): ${orderSummaryDetails.total}</strong>
                </li>
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
}

const mapStateToProps = state => {
  return {
    items: state.itemData.items,
    shoppingCart: state.itemData.shoppingCart,
    orderSummaryDetails: state.itemData.orderSummaryDetails
  }
}

export default connect(mapStateToProps)(ShoppingCart)