import React, { useEffect, useState } from 'react'
import linkGet from '../../api/link/linkGet.Js'



const MyLinks = () => {
  const [data, setData]=useState([])
  
  const allLinks=async()=>{
    const data=await linkGet()    
    setData(data)
    
  }
  useEffect(()=>{allLinks()},[])
  return (
    <div className='container-sm mt-5'>
      <ul className='list-group'>
          {data.map((link)=>(
        
              <li className='list-group-item d-flex justify-content-between align-items-center' key={link['id']}>
                <a className='text-truncate d-inline-block' style={{maxWidth: "200px"}} href={link['sourse_link']}>{link['sourse_link']}</a>
                <a href={`http://127.0.0.1:8000/api/${link["new_link"]}`}>http://127.0.0.1:8000/api/{link["new_link"]}</a>
                <div className='btn btn-primary'>delete</div>
              </li>
         
          ))}
        </ul>
    </div>
  )
}

export default MyLinks
