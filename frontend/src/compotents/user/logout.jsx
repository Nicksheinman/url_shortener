import { useContext, useEffect } from "react";
import logoutAPI from "../../api/user/logout";
import { MyContext } from "../context/provider";


const Logout=()=>{
    const {navigate, setUser}=useContext(MyContext)

    useEffect(()=>{
        const log=async()=>{
            await logoutAPI()
            setUser(false)
            navigate('/')
        }
        log()
    }, [])
}

export default Logout