import api from "../api";


const linkGet=async()=>{
    const data=await api.get("links/")
    return data.data
}

export default linkGet