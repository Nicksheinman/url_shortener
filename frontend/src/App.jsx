import './App.css'
import Navbar from './compotents/navbar/navbar'
import { Route, Routes } from "react-router-dom";
import HomePage from './compotents/home/homePage'
import MyLinks from './compotents/myLinks/myLinks'
import Register from './compotents/user/register'
import Login from './compotents/user/login'
import Logout from './compotents/user/logout';
import Email_confirm from './compotents/user/email_confirm';
import ForgotPassword from './compotents/user/forgotPassword';

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
        <Route path='/email_confirm' element={<Email_confirm/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </>
  )
}

export default App
