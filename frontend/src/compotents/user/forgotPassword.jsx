import { useState } from "react"

const ForgotPassword=()=>{
    const [emailP, setEmailP]=useState("")
    const [message, setMessage]=useState("")

    return (
        <div>
            <form className='container-md w-25'>
                {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email</label>
                    <input className="form-control"  onChange={e=>{setEmailP(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button><br></br>
            </form>
         

        </div>
    )
}

export default ForgotPassword