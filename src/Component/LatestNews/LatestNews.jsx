import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
  return (
    <>
     <div className='flex items-center mx-auto w-11/12 bg-base-300 p-2 gap-2 mt-3'>
       <p className='bg-[#D72050] text-white px-2 py-2'>Latest</p>
       <Marquee pauseOnHover={true} className='space-x-10'>
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum</Link> 
       </Marquee>
     </div>

    </>
  )
}

export default LatestNews
