import React from 'react'
import LatestNews from '../LatestNews/LatestNews'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <LatestNews/>
      <div className='w-11/12 mx-auto p-2'>
        <Navbar/>
      </div>
    </div>
  )
}

export default Home
