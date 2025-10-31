import api from "../api";


const getAnonimSession=async()=>{
    await api.get('/anonimSession/');
    
}


export default getAnonimSession