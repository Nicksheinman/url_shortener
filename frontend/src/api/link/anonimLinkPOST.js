import api from "../api"
import csrfCheck from "../auth/csrfCheck"

const postAnonimLink=async (original)=>{
    csrfCheck()
    const newLink=await api.post("anonimLink/", {sourse_link:original})
    return newLink.data.new_link
}

export default postAnonimLink