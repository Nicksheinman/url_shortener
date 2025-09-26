import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compotents/navbar/navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './compotents/home/homePage'
import MyLinks from './compotents/myLinks/myLinks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/myLinks' element={<MyLinks/>}/>

      </Routes>
    </>
  )
}

export default App
