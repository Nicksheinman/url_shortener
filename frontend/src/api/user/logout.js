import api from "../api";


const logoutAPI=async ()=>{
    await api.post('logout/')
}

export default logoutAPI