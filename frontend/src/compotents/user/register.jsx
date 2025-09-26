import React from 'react'

const Register = () => {
  return (
    <div>
        <form className='container-md w-25'> 
        
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm password</label>
                <input type="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
  )
}

export default Register