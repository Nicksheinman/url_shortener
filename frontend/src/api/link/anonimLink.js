import api from "../api";
import getAnonimSession from "../session/AnonimSession";


export const getAnoninmLink=async ()=> {
    try {
        const r=await api.get('anonimLink/').data.message;
        return r
    } catch {
        await getAnonimSession()
        const r2=await api.get('anonimLink/');
        return r2.data.message;
    }
    
}

export const postAnonimLink=async (original)=>{
    const newLink=await api.post("anonimLink/", {sourse_link:'https://www.youtube.com/watch?v=JORgAFtYebI'})
    return newLink.data.new_link
}
