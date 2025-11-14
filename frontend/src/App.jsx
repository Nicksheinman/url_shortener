import './App.css'
import Navbar from './compotents/navbar/navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './compotents/home/homePage'
import MyLinks from './compotents/myLinks/myLinks'
import Register from './compotents/user/register'
import Login from './compotents/user/login'
import Logout from './compotents/user/logout';
      

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/myLinks' element={<MyLinks/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
