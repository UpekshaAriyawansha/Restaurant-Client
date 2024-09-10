import React, { useState } from 'react'
import './comStyle.css';
import { images } from '../images/imageStore'
import { FaWindowClose } from "react-icons/fa";

const LogPopup = ({setShowLogin}) => {

    const [currState,setCurrState] =useState("Login")



  return (
    <div className='container login-popup'>
        <form class="row gap-3 popup-form">
            <FaWindowClose onClick={()=>setShowLogin(false)} className='close'/>
            <h2>{currState}</h2>
            <div >
                {currState==="Login"?<></>:                 
                    <div class="">
                        <label for="inputPassword4" class="form-label">Name</label>
                        <input type="text" class="form-control" id="userName" required/>
                    </div>
                }
                <div class="">
                    <label for="inputEmail4" class="form-label mt-3">Phone Number</label>
                    <input type="tel" class="form-control" id="telNum" required/>
                </div>
                <div class="">
                    <label for="inputPassword4" class="form-label mt-3">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" required/>
                </div>
                <div class=" mt-4">
                    <button type="submit" class="btn bg-dark text-white log-btn"> {currState==="Sign Up"?"Create Account":"Login"} </button>
                </div>

                <div class="col conditions">
                    <input type='checkbox' required/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>                
                </div>

                <div>

                    {currState==="Login"?
                        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
                        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                    }


                </div>

            </div>
            
        </form>  
    </div>
  )
}

export default LogPopup
