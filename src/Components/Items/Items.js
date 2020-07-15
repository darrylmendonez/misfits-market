import React from 'react'

const Items = (props) => {
  const { items, shoppingCart, handleIncrement, handleDecrement } = props
  const cards = items && shoppingCart ? (
    items.map( item => (
      <div key={item.id} className="card mx-3 my-3">
        <div className="card-body">
          <img className="img-fluid card-img-top" src={require(`${item.imgPath}`)} alt=""/>
          <h5 className="card-title">{item.product}</h5>
          <div className="row">
            <div className="col-md-6">
            <small>MSRP: <span className="strikeout">${item.msrp}</span></small><br/>
            <strong>Buy: <span>${item.price.toFixed(2)}</span></strong><br/>
            <small>Save: ${(item.msrp - item.price).toFixed(2)}</small>
            {item.soldOut ? (
              <div className="text-danger">Sold Out</div>
            ) : (
              <div className="text-success">In Stock</div>
            )}
            </div>
            <div className="col-md-6">
              <div className="text-right">
                {item.soldOut ? (
                  null
                ) : (
                  <React.Fragment>
                    <div className="mt-4 disable-select">
                      Add to cart:<br />
                      <i onClick={() => handleDecrement(shoppingCart[item.id], item.id)} className="fa fa-minus-circle yellow-text" aria-hidden="true"></i><span className="mx-2">Qty: { shoppingCart[item.id] }</span><i onClick={() => handleIncrement(item.id)} className="fa fa-plus-circle yellow-text" aria-hidden="true"></i>
                      <span className={`text-success ${shoppingCart[item.id] ? 'slide-in-blurred-bottom' : 'slide-out-blurred-top'}`}>Added!</span>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
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