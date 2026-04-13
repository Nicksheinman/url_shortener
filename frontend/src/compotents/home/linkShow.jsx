import getAnonimSession from '../../api/session/AnonimSession'
import getAnoninmLink from '../../api/link/anonimLinkGET'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const LinkShow = ({ shortUrl, setShortUrl }) => {
  const [fullShortUrl, setFullShortUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const links = async () => {
      await getAnonimSession()
      const link = await getAnoninmLink()
      setShortUrl(link)
    }

    links()
  }, [])

  useEffect(() => {
    if (shortUrl) {
      setFullShortUrl(`${API_URL}/${shortUrl}`)
    }
  }, [shortUrl])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullShortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  return (
    shortUrl && (
      <div className="card w-75">
        <div className="card-body d-flex align-items-center gap-2">
          <a id='basic-url' data-testid="shortLink" href={fullShortUrl}>{fullShortUrl}</a>

          <button
            type="button"
            className="btn btn-primary"
            onClick={copyLink}
          >
            Copy
          </button>

          {copied && <span className="text-success">Copied!</span>}
        </div>
      </div>
    )
  )
}

export default LinkShow