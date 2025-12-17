import { useState } from "react"
import passwordChangeEmail from "../../api/user/passwordChangeEmail"



const ForgotPassword=()=>{
    const [emailP, setEmailP]=useState("")
    const [message, setMessage]=useState("")

    const emailSubmit=async (e)=>{
        e.preventDefault()

        if (emailP) {
            passwordChangeEmail(emailP)
            setMessage('If the email address is registered, you will receive an email with further instructions.')
        }
    }



    return (
        <div>
            <form className='container-md w-25' onSubmit={e=>emailSubmit(e)}>
                {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email</label>
                    <input className="form-control"  onChange={e=>{setEmailP(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         

        </div>
    )
}

export default ForgotPassword