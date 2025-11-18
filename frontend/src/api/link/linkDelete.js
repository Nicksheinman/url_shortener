import api from "../api";

const linkDelete=async(num)=>{
    return api.delete(`/links/${num}/`)}

export default linkDelete