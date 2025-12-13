import { useEffect } from "react"
import registerVertify from "../../api/user/registerVertify";
import { useContext } from "react";
import { MyContext } from '../context/provider'

const Email_confirm= ()=>{
      const {navigate}=useContext(MyContext)

    useEffect( ()=>{
        const confirm=async ()=>{
            const token=new URLSearchParams(window.location.search).get('token');
            const res=await registerVertify(token)
            console.log(res)
            if (res=='user is active') {
                navigate('login/')
            }
        }
        confirm()
    }, [])
}

export default Email_confirm