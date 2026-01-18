import registerAPI from '../../api/user/register'
import { useState, useContext } from 'react'
import { MyContext } from '../context/provider'


const Register = () => {
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [secondPassword, setSecondPassword]= useState("");
    const [message, setMessage]=useState("");
    const [buttonCheck, setButtonCheck]=useState(false)
    


    const registerFunc=async (e)=>{
        e.preventDefault()
        if (username.length>=5 && password===secondPassword && password.length>=7 &&buttonCheck===false) {
            setButtonCheck(true)
            const newMessage=await registerAPI(username,email ,password, secondPassword).catch()
            if (newMessage===true) {
                setMessage('Check your email to confirm your registration.')
            }
            else {
                setMessage(newMessage)
                setButtonCheck(false)

            }
        }
        else if (password!=secondPassword) {
            setMessage('password didnt match')
            setButtonCheck(false)
            return
        }
        else if (password<=7) {
            setMessage("The password must contain at least 8 characters")
            setButtonCheck(false)
            return
        }
        else if(username<=4) {
            setMessage("The username must contain at least 5 characters")
            setButtonCheck(false)
        }
        return
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
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={e=>{setEmail(e.target.value)}}/>
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