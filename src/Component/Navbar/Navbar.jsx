import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/user.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 ">
      
      {/* Left side (Logo or empty for now) */}
      <div></div>

      {/* Center Navigation */}
      <div className="flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Right side (User + Login Button) */}
      <div className="flex gap-2 items-center">
        <img src={user} alt="user" className="w-8 h-8 rounded-full" />
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  )
}

export default Navbar
