import React from 'react'
import './comStyle.css'
import { menu_list } from '../images/imageStore'

const MenuList = () => {
  return (
    <div className='container'>
      <div className='menu-content'>
            <h2 className=''>
                Our Menu List
            </h2>
            <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat bibendum felis, quis pulvinar leo suscipit sit amet.</p>
            {/* <button className='webBtn px-3 pb-1'>View Menu</button> */}

            <div className='menulist'>
                {menu_list.map((item, index) =>{
                    return(
                        <div key={index} className=''>
                        <img src={item.menu_image} alt={item}/>
                        <p>{item.menu_name}</p>
                        </div>
                    )
                })}


            </div>
        </div>
    </div>
  )
}

export default MenuList
