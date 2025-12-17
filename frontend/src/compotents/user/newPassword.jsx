import { useState } from "react"
import passwordChangeEmail from "../../api/user/passwordChangeEmail"



const NewPassword=()=>{
    const [password, setPassword]= useState("");
    const [secondPassword, setSecondPassword]= useState("");
    const [message, setMessage]=useState("")

    const passwordSubmit=async (e)=>{
        e.preventDefault()

        if (emailP) {
            passwordChangeEmail(emailP)
            setMessage('If the email address is registered, you will receive an email with further instructions.')
        }
    }



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