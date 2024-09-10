import React from 'react'
import './pageStyle.css'
import { images } from '../images/imageStore'
import FoodDisplay from '../components/FoodDisplay'
import MenuList from '../components/MenuList'

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <img className='banner mt-5' alt='banner' src={images.banner}/>

        <div className='banner-content '>
            <h2 className='text-white'>
                Order your favourite food here
            </h2>
            <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat bibendum felis, quis pulvinar leo suscipit sit amet.</p>
            <button className='webBtn px-3 pb-1'>View Menu</button>
        </div>

        <hr className='mt-5 w-50 text-center'/>

    <FoodDisplay/>
      
      </div>
    </div>
  )
}

export default Home
