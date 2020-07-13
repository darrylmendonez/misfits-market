import React from 'react'

const Navbar = () => {
  return(
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Misfits Market</span>
        <div data-toggle="modal" data-target="#exampleModal">
          <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar