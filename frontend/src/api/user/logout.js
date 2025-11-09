import api from "../../api/api";
import csrfCheck from "../auth/csrfCheck";


const logoutAPI=async ()=>{
    await csrfCheck()
    await api.post('logout/')
}

export default logoutAPI