import api from "../api";
import getAnonimSession from "../session/AnonimSession";


const getAnoninmLink=async ()=> {
    try {
        const r=await api.get('anonimLink/');
        return r.data[0].new_link
    } catch {
        await getAnonimSession()
        const r2=await api.get('anonimLink/');
        return r2.data?.[0]?.new_link ?? null;
    }
    
}

export default getAnoninmLink