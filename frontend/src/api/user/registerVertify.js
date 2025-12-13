import api from "../api";


const registerVertify=async (token)=>{
   const res=await api.post('register_vertify/', {token:token})
   return res.data
}

export default registerVertify