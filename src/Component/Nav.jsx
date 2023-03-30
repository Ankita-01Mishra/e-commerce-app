import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/' className='navlink'>HOME</Link>
      <Link to='/store' className='navlink'>STORE</Link>
      <Link to='/iphone' className='navlink'>IPHONE</Link>
      <Link to='/ipad' className='navlink'>IPAD</Link>
      <Link to='/macbook' className='navlink'>MACBOOK</Link>
      <Link to='/accesories' className='navlink'>ACCESORIES</Link>
    </div>
  )
}

export default Nav
