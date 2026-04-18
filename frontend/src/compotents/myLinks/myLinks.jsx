import { useEffect, useState } from 'react'
import linkGet from '../../api/link/linkGet'
import linkDelete from '../../api/link/linkDelete'
import MyLinkPost from './myLinkPost'


const MyLinks = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const API_URL = import.meta.env.VITE_API_URL
  const allLinks = async () => {
    const data = await linkGet()
    setData(data)
  }

  const deleteLink = async (id) => {
    await linkDelete(id)
    allLinks()
  }

  const copyLink = async (shortLink) => {
    try {
      await navigator.clipboard.writeText(shortLink)
      setMessage('Link copied')
      setTimeout(() => setMessage(''), 1500)
    } catch (error) {
      setMessage('Failed to copy link')
      setTimeout(() => setMessage(''), 1500)
      console.error(error)
    }
  }

  useEffect(() => {
    allLinks()
  }, [])

  return (
    <div className='container-sm mt-5'>
      {message && (
        <div className='bg-warning border border-dark text-light text-center p-3'>
          {message}
        </div>
      )}

      <ul className='list-group'>
        {data.map((link) => {
          const shortLink = `${API_URL}/${link["new_link"]}`

          return (
            <li
              className='list-group-item d-flex justify-content-between align-items-center gap-3'
              key={link['id']}
            >
              <a
                className='text-truncate d-inline-block'
                style={{ maxWidth: "200px" }}
                href={link['sourse_link']}
              >
                {link['sourse_link']}
              </a>

              <a href={shortLink} data-source-link={link['sourse_link']}>
                {shortLink}
              </a>

              <div className='d-flex gap-2'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => copyLink(shortLink)}
                >
                  Copy
                </button>

                <button
                  type='button'
                  className='btn btn-primary'
                  id={link['id']}
                  data-source-link={link['sourse_link']}
                  data-testid="short-link"
                  onClick={(e) => deleteLink(e.target.id)}
                >
                  delete
                </button>
              </div>
            </li>
          )
        })}

        <MyLinkPost setMessage={setMessage} allLinks={allLinks} />
      </ul>
    </div>
  )
}

export default MyLinks
 