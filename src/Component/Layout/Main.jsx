import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Main = () => {
  return (
    <div className='font-poppins'>
      <Header/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default Main
