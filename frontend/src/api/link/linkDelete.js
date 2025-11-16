import api from "../api";

const linkDelete=(num)=>{api.delete(`/links/${num}/`)}

export default linkDelete