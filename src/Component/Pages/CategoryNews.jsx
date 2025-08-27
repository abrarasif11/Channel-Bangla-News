import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CategoryNews = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>
      <h2>CategoryNews: {data.length}</h2>
    </div>
  )
}

export default CategoryNews
