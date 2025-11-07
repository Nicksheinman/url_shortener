import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext=createContext();


export const MyProvider=({children})=>{
    const navigate=useNavigate();
    const [user, setUser]=useState(false)
    

    return (
        <MyContext.Provider value={{navigate, user, setUser}}>
            {children}
        </MyContext.Provider>
    )
}