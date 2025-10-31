import api from "../api"

const getSCRF=()=>{
    api.get('/csrf/')
}



export default getSCRF