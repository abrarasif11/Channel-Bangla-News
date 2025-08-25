import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <p>Header</p>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default Main
