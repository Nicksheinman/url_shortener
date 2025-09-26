import React from 'react'

const Login = () => {
  return (
    <div>
        <form className='container-md w-25'>
            <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input className="form-control" />
            </div>
            <div className="mb-3">
                <label for="Password" className="form-label">Password</label>
                <input type="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login