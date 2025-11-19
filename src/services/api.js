import axios from "axios";

const api = axios.create({
    baseURL: "https://meu-server/api",
    timeout: 100000
})

export default api