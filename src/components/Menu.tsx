import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='navbar'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
    </div>
  )
}
