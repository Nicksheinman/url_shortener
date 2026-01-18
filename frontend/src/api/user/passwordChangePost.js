import api from "../api"

const passwordChangePost=async (token, password, secondPassword)=>{
    console.log(token)
    const res=await api.post('password_change/', {token:token, password:password, second_password:secondPassword})
    return res.data
}


export default passwordChangePost