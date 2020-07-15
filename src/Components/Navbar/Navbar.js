import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    const{ orderSummaryDetails } = this.props
    return(
      <nav className="navbar navbar-light light-grey-bg sticky-top">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Misfits Market</span>
          <div  className={`${orderSummaryDetails.totalNumberOfItems > 0 ? 'yellow-text' : 'grey-text'}`} data-toggle="modal" data-target="#exampleModal">
            <strong>{orderSummaryDetails.totalNumberOfItems}</strong><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
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

export default connect(mapStateToProps)(Navbar)