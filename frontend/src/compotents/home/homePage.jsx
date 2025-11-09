import LinkShow from './linkShow'
import postAnonimLink from '../../api/link/anonimLinkPOST'
import { useContext, useState } from 'react'
import { MyContext } from '../context/provider'


const HomePage = () => {
  const [inputUrl, setInputUrl]=useState('')
  
  const [shortUrl, setShortUrl]=useState()

  const {user}=useContext(MyContext)
  
  const urlSend=async ()=>{
    if (inputUrl.startsWith('https://') && inputUrl.length>8) 
      {const anonim=await postAnonimLink(inputUrl)
       setShortUrl(anonim) 
      }
  }

  return (
    <div className=''>
      <div className='container'>
        <h5 className='text-justify-content '>A simple and fast URL shortener built with Django and React. Create short links, share them easily, and track their usage</h5>
        {user!=true && 
        <div className="input-group w-75 mb-5 mt-5">
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" onChange={e=>setInputUrl(e.target.value)} value={inputUrl} />
            <input className="btn btn-primary" type="submit" value="Make it short" onClick={urlSend}></input>
        </div>}
        
        <LinkShow shortUrl={shortUrl} setShortUrl={setShortUrl}/>
      </div>  
    </div>
  )
}

export default HomePage