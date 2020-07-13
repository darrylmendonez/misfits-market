import React from 'react'

const Items = (props) => {
  const { items, shoppingCart, handleIncrement, handleDecrement } = props
  const cards = items && shoppingCart ? (
    items.map( item => (
      <div key={item.id} className="card mx-3">
        <div className="card-body">
          <h5 className="card-title">{item.product}</h5>
          <div className="text-right">
            <small>MSRP: <span className="strikeout">${item.msrp}</span></small><br/>
            <strong>Buy: <span>${item.price}</span></strong><br/>
            <small>Save: ${(item.msrp - item.price).toFixed(2)}</small>
            {item.soldOut ? (
              <div className="text-danger">Sold Out</div>
            ) : (
              <React.Fragment>
                <div className="text-success">In Stock</div>
                <br />
                <span>Add to cart:<br />
                <i onClick={() => handleDecrement(shoppingCart[item.id], item.id)} className="fa fa-minus-square-o" aria-hidden="true"></i>
<span className="mx-2">{ shoppingCart[item.id] }</span><i onClick={() => handleIncrement(item.id)} className="fa fa-plus-square-o" aria-hidden="true"></i>
</span>
              </React.Fragment>
            )}
            
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="center">Loading...</div>
  )
  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default Items