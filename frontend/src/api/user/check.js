import api from "../api";


const checkAPI=async ()=> {
    const che=await api.get('check/')
    return che
}


export default checkAPI