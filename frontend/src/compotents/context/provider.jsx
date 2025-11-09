import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkAPI from "../../api/user/check";

export const MyContext=createContext();


export const MyProvider=({children})=>{
    const navigate=useNavigate();
    const [user, setUser]=useState(false)
    
    const start=async ()=> {
        const a=await checkAPI()
        if (a.data.message===true) {
            setUser(true)
        }
    }

    useEffect(()=>{
        start()
    }, [])

    return (
        <MyContext.Provider value={{navigate, user, setUser}}>
            {children}
        </MyContext.Provider>
    )
}