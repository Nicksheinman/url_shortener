import getAnonimSession from '../../api/session/AnonimSession'
import getAnoninmLink from '../../api/link/anonimLinkGET'
import { useState, useEffect } from 'react'


const LinkShow = ({shortUrl, setShortUrl}) => {

    
    const [fullShortUrl, setFullShortUrl]=useState('http://127.0.0.1:8000/api/')
    
    useEffect(()=>{
        const links=async()=>{
        await getAnonimSession();
        const link=await getAnoninmLink()
        setShortUrl(link)
        }
        links()
    }, [])
    
    useEffect(()=>{
        setFullShortUrl(`http://127.0.0.1:8000/api/${shortUrl}`)
    }, [shortUrl])

  return (
    
          shortUrl && (
          <div className="card w-75">
            <div className="card-body">
              <a href={fullShortUrl}>{fullShortUrl}</a>
            </div>
          </div>  
          )
    
  )
}

export default LinkShow