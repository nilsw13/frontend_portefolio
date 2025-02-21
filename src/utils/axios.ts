import axios from "axios";

const version = "v1";

const api = axios.create({
    baseURL: `https://api.nilswenting.com/${version}`, // url de l'api en developpement -- https://api.nilswenting.com/$ en production
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

})

export default api;