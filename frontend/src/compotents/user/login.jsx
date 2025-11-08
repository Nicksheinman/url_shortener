import React, { useContext } from 'react'
import loginAPI from '../../api/user/login'
import { useState } from 'react'
import { MyContext } from '../context/provider'



const Login = () => {
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [message, setMessage]=useState('')

  const {setUser, navigate}=useContext(MyContext)

  const loginFun=async (e)=>{
    e.preventDefault()
    if (username.length>=5 && password.length>=7) {
      const req=await loginAPI(username, password)
      if (req===true) {
        setUser(true);
        navigate('/myLinks')
      }
      else {
        setMessage(req)
      }
      
    }
  }


  return (
    <div>
        <form className='container-md w-25' onSubmit={loginFun}>
            {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input className="form-control"  onChange={e=>{setUsername(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login