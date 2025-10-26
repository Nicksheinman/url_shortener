import axios from "axios"

const getSCRF=()=>{
    axios.get('http://127.0.0.1:8000/api/csrf/')
}



export default getSCRF