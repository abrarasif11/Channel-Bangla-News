import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default Main
