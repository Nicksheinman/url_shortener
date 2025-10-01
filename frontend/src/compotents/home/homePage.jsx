import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <div className='container'>
        <h5 className='text-justify-content '>A simple and fast URL shortener built with Django and React. Create short links, share them easily, and track their usage</h5>
        <div className="input-group w-75 mb-5 mt-5">
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
            <input className="btn btn-primary" type="submit" value="Make it short"></input>
        </div>
        <div className="card w-75">
          <div className="card-body">
            <a href="https://test.com">https://test.com</a>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default HomePage