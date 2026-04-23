import axios from "axios";
import { API } from "./client";

const api = axios.create({
  baseURL: `${API}`,
  withCredentials: true,           
});

export default api