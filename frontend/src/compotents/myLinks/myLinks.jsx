import { useEffect, useState } from 'react'
import linkGet from '../../api/link/linkGet.Js'
import linkDelete from '../../api/link/linkDelete'
import MyLinkPost from './myLinkPost'


const MyLinks = () => {
  const [data, setData]=useState([])
  const [message, setMessage]=useState('')

  const allLinks=async()=>{
    const data=await linkGet()    
    setData(data)
    
  }
  

  const deleteLink=async (id)=> {
    await linkDelete(id);
    allLinks();
  }


  useEffect(()=>{allLinks()},[])
  return (
    <div className='container-sm mt-5'>
      {message && <div className='bg-warning border border-dark text-light text-center p-3'>{message}</div>}
      <ul className='list-group'>
          {data.map((link)=>(
              <li className='list-group-item d-flex justify-content-between align-items-center' key={link['id']}>
                <a className='text-truncate d-inline-block' style={{maxWidth: "200px"}} href={link['sourse_link']}>{link['sourse_link']}</a>
                <a href={`http://127.0.0.1:8000/api/${link["new_link"]}`}>http://127.0.0.1:8000/api/{link["new_link"]}</a>
                <div className='btn btn-primary' id={link['id']}  onClick={e=>{deleteLink(e.target.id)}}>delete</div>
              </li>     
          ))}
          <MyLinkPost setMessage={setMessage} allLinks={allLinks}/>
        </ul>
    </div>
  )
}

export default MyLinks
 