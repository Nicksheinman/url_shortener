import React from 'react'
import registerAPI from '../../api/user/register'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [secondPassword, setSecondPassword]= useState("");
    const [message, setMessage]=useState("");
    
    const navigate=useNavigate();

    const registerFunc=async (e)=>{
        e.preventDefault()
        if (username.length>=5 && password===secondPassword && password>=7) {
            const newMessage=await registerAPI(username, password, secondPassword).catch()
            if (newMessage===true) {
                navigate('/login')
            }
            else {
                setMessage(newMessage)
            }
        }
        else if (password!=secondPassword) {
            setMessage('password didnt match')
            return
        }
        else if (password<=7) {
            setMessage("The password must contain at least 8 characters")
            return
        }
        else {
            setMessage("The username must contain at least 5 characters")
        }

    }


  return (
    <div>
        <form className='container-md w-25' onSubmit={registerFunc}> 
            
            {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input className="form-control" onChange={e=>{setUsername(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e=>{setPassword(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm password</label>
                <input type="password" className="form-control" onChange={e=>{setSecondPassword(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
  )
}

export default Register