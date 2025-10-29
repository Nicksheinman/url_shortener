import api from "../api"

const getSCRF=()=>{
    api.get('/api/csrf/')
}



export default getSCRF