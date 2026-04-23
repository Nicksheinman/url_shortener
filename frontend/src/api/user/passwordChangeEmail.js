import api from "../api";
import getSCRF from "../auth/csrf";
const passwordChangeEmail=async (email)=>{
    await getSCRF()
    await api.post('password_email/', {email:email})
    return true
}

export default passwordChangeEmail