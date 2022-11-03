import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='position'>
        <div className='navbar'>
          <div className='logo'>
            <img src="./logo.png" alt="" className='port'/>
          </div>

          <div className='links'>
            <Link to='/' className='text'>HOME</Link>
            <Link to='/about' className='text'>ABOUT</Link>
            <Link to='/contact' className='text'>CONTACT</Link>
          </div>

        </div>

      </div>
    )
  }
}
