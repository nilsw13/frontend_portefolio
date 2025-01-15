import axios from "axios";

const version = "v1";

const api = axios.create({
    baseURL: `http://localhost:8080/api/${version}`, // url de l'api en developpement
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

})

export default api;