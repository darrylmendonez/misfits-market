import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../../index'
import { initialItems, userPurchasedTrue } from '../../Store/Actions/itemActions'

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submittingOrder: false,
      smileStatus: false,
    }
  }
  handleClick = () => {
    if (this.state.smileStatus) { this.setState({smileStatus: false}) }
    store.dispatch( initialItems() )
    store.dispatch( userPurchasedTrue() )
    this.setState({submittingOrder: true})
    setTimeout( () => {
      this.setState({submittingOrder: false})
    }, 2000 )
    setTimeout( () => {
      this.setState({smileStatus: true})
    }, 5000 )
  }

  render() {
    const { items, shoppingCart, orderSummaryDetails, userPurchased } = this.props
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

    const listItems = selectedItemIds.length ? (
      selectedItemIds.map( id => (
        <li className="list-group-item" key={id[0]-1}>
          <h6>{items[id[0]-1].product}</h6>
          <span>Qty: {id[1]}</span><br/>
          <span>${items[id[0]-1].price} each</span><span className="pull-right">Price: ${(items[id[0]-1].price * id[1]).toFixed(2)}</span>
        </li>
      ))
    ) : (
      <div className="text-center">There are no items in your cart</div>
    )

    const calcTotal = selectedItemIds.length ? (
      <li className="list-group-item">
        <span className="pull-right">Shipping & handling: ${orderSummaryDetails.shipping.toFixed(2)}</span><br/>
        <span className="pull-right">Tax: ${orderSummaryDetails.tax.toFixed(2)}</span><br/>
        <strong className="pull-right">Total ({orderSummaryDetails.totalNumberOfItems} items): ${orderSummaryDetails.total.toFixed(2)}</strong>
      </li>
    ) : (null)

    const orderSummary = userPurchased ? (this.state.submittingOrder ?
      (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw yellow-text"></i>
        </div>
      ) : (
        <div className="text-center">
          <h6 className="text-success tracking-in-expand"><i className="fa fa-check-square-o" aria-hidden="true"></i> Your order has been received!</h6>
          {this.state.smileStatus ? (<i className="fa fa-smile-o yellow-text fade-in-fwd" aria-hidden="true"></i>) : (<br />)}
        </div>
      ) ) : (
      <ul className="list-group">
        {listItems}
        {calcTotal}
      </ul>
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
              {orderSummary}
            </div>
            <div className="modal-footer">
              {userPurchased ? (this.state.submittingOrder ? (
              <span>
                <br /><br />
              </span>) : (
              <button type="button" className="btn btn-warning fade-in-fwd" data-dismiss="modal">Start a new order</button>
              ) ) : (
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Continue shopping</button>
              )}
              {orderSummaryDetails.total ? (
                <button onClick={this.handleClick} type="button" className="btn btn-warning">Buy Now</button>
              ) : (null)
              }
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
    orderSummaryDetails: state.itemData.orderSummaryDetails,
    userPurchased: state.itemData.userPurchased,
  }
}

export default connect(mapStateToProps)(ShoppingCart)