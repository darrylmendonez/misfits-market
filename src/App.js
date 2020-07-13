import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import Navbar from './Components/Navbar'
import Items from './Components/Items'
import ShoppingCart from './Components/ShoppingCart'
import {store} from './index'
import { initialItems } from './Store/Actions/itemActions'
import { incrementQuantity, decrementQuantity } from './Store/Actions/shoppingCartActions'

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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementQuantity: id => dispatch( incrementQuantity(id) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
