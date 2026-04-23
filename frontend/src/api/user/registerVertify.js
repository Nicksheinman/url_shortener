import api from "../api";
import getSCRF from "../auth/csrf";

const registerVertify=async (token)=>{
   await getSCRF()
   const res=await api.post('register_vertify/', {token:token})
   return res.data
}

export default registerVertify