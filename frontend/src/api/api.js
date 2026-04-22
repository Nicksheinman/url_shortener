import axios from "axios";
import { API } from "./client";

const api = axios.create({
  baseURL: `${API}`,
  withCredentials: true,           
  xsrfCookieName: "csrftoken",  
  xsrfHeaderName: "X-CSRFToken",          
});


export default api