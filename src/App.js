import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.scss'
import Navbar from './Components/Navbar'
import Items from './Components/Items'
import ShoppingCart from './Components/ShoppingCart'
import { store } from './index'
import { initialItems, incrementQuantity, decrementQuantity, hideConfirmationMsg } from './Store/Actions/itemActions'

class App extends Component {

  handleIncrement = id => {
    store.dispatch( incrementQuantity(id) )
  }
  handleDecrement = (currentQuantity, id) => {
    if (currentQuantity > 0) {
      store.dispatch( decrementQuantity(id) )
    }
  }

  componentDidMount() {
    store.dispatch( initialItems() )
  }
  render() {
    const { items, shoppingCart } = this.props
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Items items={items} shoppingCart={shoppingCart} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} />
            </div>
          </div>
        </div>
        <ShoppingCart items={items}  shoppingCart={shoppingCart} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemData.items,
    shoppingCart: state.itemData.shoppingCart,
    userPurchased: state.itemData.userPurchased,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementQuantity: id => dispatch( incrementQuantity(id) ),
    decrementQuantity: id => dispatch( decrementQuantity(id) ),
    hideConfirmationMsg: id => dispatch( hideConfirmationMsg(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
