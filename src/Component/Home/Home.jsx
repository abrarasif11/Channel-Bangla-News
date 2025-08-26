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
    
      <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4'>
        {/* Left Content */}
        <aside className='col-span-3  p-2'>
          Left Content
        </aside>

        {/* Main Content */}
        <section className='col-span-6  p-2'>
          Main Content
        </section>

        {/* Right Content */}
        <aside className='col-span-3  p-2'>
          Right Content
        </aside>
      </main>
    </div>
  )
}

export default Home
