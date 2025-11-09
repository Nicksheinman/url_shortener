import { useContext, useEffect } from "react";
import logoutAPI from "../../api/user/logout";
import { MyContext } from "../context/provider";


const Logout=()=>{
    const {navigate}=useContext(MyContext)

    useEffect(()=>{
        logoutAPI()
        navigate('/')
    }, [])
}

export default Logout