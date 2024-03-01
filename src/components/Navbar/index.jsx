import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='Main-nav'>
      <div className='Logo'>
        <h2>
          <span>B</span>arber
          <span>S</span>hop
        </h2>
      </div>
      <div className="menu-items">
        <ul>
          <li  >
          <a href="#">HOME</a>
          </li>
          <li  >
          <a href="#">ABOUT US </a>
          </li>
          <li  >
          <a href="#">OUR SERVICES</a>
          </li>
          <li  >
          <a href="#">CONTACT US </a>
          </li>
        </ul>
      </div>
      <div className="login-button">
        <input type='button'>
           Login
        </input>
      </div>
    </nav>
  )
}

export default Navbar