import api from "../api";


const getAnonimSession=async()=>{
    const data=((await api.get('/api/anonimSession/')).data);
    return data
}


export default getAnonimSession