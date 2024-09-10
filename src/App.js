// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MenuList from './components/MenuList';
import Home from './pages/Home';
import FoodDisplay from './components/FoodDisplay';
// import Login from './pages/Login';
import LogPopup from './components/LogPopup';

const App = () => {

  const [showLogin, setShowLogin] =useState(false)

  return (
<>
    {showLogin?<LogPopup setShowLogin={setShowLogin}  />:<></>}
        <div className='app'>
          < NavBar setShowLogin={setShowLogin}/>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route index element={<Home/>}/>
              {/* <Route path='/login' element={<Login/>}/> */}
              {/* <Route path='/menu-list' element={<FoodDisplay/>}/> */}

            </Routes>
          </BrowserRouter>
          
        </div>
</>
    
  )
}

export default App
