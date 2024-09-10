import React from 'react';
import './comStyle.css';
import { food_list } from '../images/imageStore';

const FoodDisplay = () => {
  return (  // Return statement is necessary
    <div className='container mt-5 food-display'>
      <div className='menu-content'>
        <h2 className='menu-text'>Today Available Food List</h2>
        <p  className='menu-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat bibendum felis, quis pulvinar leo suscipit sit amet.</p>

        {/* Map through the food_list and render each item */}
        <div className="food-list ">
          {food_list.map((item) => (
            <div key={item._id} className='food-item mt-2 pt-5 pb-3 px-5 card'>
              <img src={item.image} alt={item.name} className='food-image card-img-top' />
              <div class="card-body">
                <h3 class="card-text">{item.name}</h3>
                <p class="card-text">Price: Rs {item.price}</p>
                <p class="card-text">{item.description}</p>
                <button className='webBtn px-3 pb-1'>Buy</button>
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
