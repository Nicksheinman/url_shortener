import api from "../api";

const passwordChangeEmail=async (email)=>{
    await api.post('password_email/', {email:email})
    return true
}

export default passwordChangeEmail