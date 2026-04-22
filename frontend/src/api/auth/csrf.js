import api from "../api"

let csrfToken = null;

export const getSCRF = async () => {
  const response = await api.get("/csrf/");
  csrfToken = response.data.csrfToken;
};

api.interceptors.request.use((config) => {
  const methods = ["post", "put", "patch", "delete"];

  if (csrfToken && methods.includes(config.method)) {
    config.headers["X-CSRFToken"] = csrfToken;
  }

  return config;
});



export default getSCRF