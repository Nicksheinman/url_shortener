import api from "../api";

const registerAPI=async (username, password, second_password)=> {
    try {
        await api.post('register/', {"username":username, "password": password , "second_password": second_password})
        return true
    }
    catch (error) {
        const data = error.response.data;
        const messages = Object.values(data).flat().join('\n')
        return messages
    }
}


export default registerAPI