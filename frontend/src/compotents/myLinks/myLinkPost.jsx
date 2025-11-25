import { useState } from "react"
import linkPost from "../../api/link/linkPost"



const MyLinkPost=({setMessage, allLinks})=>{
    const [input, setInput]=useState('')
    
    const postLink=async()=>{
        if (input.startsWith('https://') && input.length>8) {
            const res=await linkPost(input)
            if (res["status"]===201) {
                allLinks()
            }
            else {
                setMessage("Something went wrong")
            }
        }
        else {
            setMessage("You need to fill out the full URL")
        }
    }
    

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" placeholder='enter your url' value={input} onChange={e=>{setInput(e.target.value)}}/>
            <div className='btn btn-primary' onClick={postLink}>submit</div>
        </li>
    )
}

export default MyLinkPost