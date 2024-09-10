import React, { useState } from 'react'
import './comStyle.css'
import { images } from '../images/imageStore'

import { FaSearch,FaRegUser } from "react-icons/fa";

const NavBar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home")

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-white mt-5 mx-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={images.logo} alt='' className='logo' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
     </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Food Menu</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Table Reservation</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">My Order</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">Contact</a>
        </li>

      </ul>

      <br/>

      <form class="d-flex search-bar">
        <div className="d-flex ms-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Search"
              aria-label="Search"
            />
             <button className="input-group-text webBtn text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>

      <button class="btn mx-3 webBtn login" type="submit" onClick={()=>setShowLogin(true)}><FaRegUser className='text-white mb-2'/></button>

    </div>
  </div>
</nav>



  )
}

export default NavBar
