import api from "../api";


const linkPost=async (link)=>{
    const res=await api.post('links/', {sourse_link: link})

    return res
    };
    

export default linkPost