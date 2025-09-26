import React from 'react'

const MyLinks = () => {
  return (
    <div className='container-sm mt-5'>
        <ul className='list-group'>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            <a href="#">https://getbootstrap.com/docs/</a>
            <a href="#">https://getbootstrap</a>
            <div className='btn btn-primary'>delete</div>
          </li>
        </ul>
    </div>
  )
}

export default MyLinks