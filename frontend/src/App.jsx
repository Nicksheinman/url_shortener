import { useState } from 'react'
import getSCRF from './api/auth/csrf';
import './App.css'
import Navbar from './compotents/navbar/navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './compotents/home/homePage'
import MyLinks from './compotents/myLinks/myLinks'
import Register from './compotents/user/register'
import Login from './compotents/user/login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/myLinks' element={<MyLinks/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
