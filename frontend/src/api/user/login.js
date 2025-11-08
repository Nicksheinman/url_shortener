import api from "../api";

const loginAPI=async (username, password)=> {
    try {
        await api.post('login/', {username:username, password:password});
        return true
    }
    catch (error){
        const data=error.response.data.non_field_errors;
        const messages = Object.values(data).flat().join('\n')
        return messages
    }
    
}

export default loginAPI