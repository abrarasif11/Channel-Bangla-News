import React from 'react'
import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <img className='mt-10 w-[300px]' src={logo} alt="" />
      </div>
      <h2 className='text-gray-500 mt-5 mb-3'>Journalism Without Fear</h2>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
    </div>
  )
}

export default Header
