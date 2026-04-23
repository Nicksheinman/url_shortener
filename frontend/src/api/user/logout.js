import api from "../api";
import getSCRF from "../auth/csrf";

const logoutAPI=async ()=>{
    await getSCRF()
    await api.post('logout/')
}

export default logoutAPI