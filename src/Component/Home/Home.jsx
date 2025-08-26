import React from 'react'
import LatestNews from '../LatestNews/LatestNews'
import Navbar from '../Navbar/Navbar'
import LeftContent from '../Contents/LeftContent/LeftContent'
import MainContent from '../Contents/MainContent/MainContent'
import RightContent from '../Contents/RightContent/RightContent'

const Home = () => {
  return (
    <div>
      <LatestNews/>
      <div className='w-11/12 mx-auto p-2'>
        <Navbar/>
      </div>
    
      <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4'>
        {/* Left Content */}
        <aside className='col-span-3  p-2'>
          <LeftContent/>
        </aside>

        {/* Main Content */}
        <section className='col-span-6  p-2'>
          <MainContent/>
        </section>

        {/* Right Content */}
        <aside className='col-span-3  p-2'>
          <RightContent/>
        </aside>
      </main>
    </div>
  )
}

export default Home
