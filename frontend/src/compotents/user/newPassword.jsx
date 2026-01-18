import { useState } from "react"
import passwordChangePost from "../../api/user/passwordChangePost";



const NewPassword=()=>{
    const [password, setPassword]= useState("");
    const [secondPassword, setSecondPassword]= useState("");
    const [message, setMessage]=useState("")
    const [buttonCheck, setButtonCheck]= useState("")
    
    const passwordSubmit=async (e)=>{
        e.preventDefault()
        if (password===secondPassword && password.length>=7 &&buttonCheck==false) {
            setButtonCheck(true)
            const token=new URLSearchParams(window.location.search).get('token');
            const newMessage=await passwordChangePost(token ,password, secondPassword).catch()
            if (newMessage===true) {
                setMessage('Your password has been successfully changed. You can now log in to your account.')
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
        return}



    return (
        <div>
            <form className='container-md w-25' onSubmit={e=>passwordSubmit(e)}>
                {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={e=>{setPassword(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" onChange={e=>{setSecondPassword(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         

        </div>
    )
}

export default NewPassword