import axios from "axios"

const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RDCIS_SERVER_DEV,
})

export default axiosConfig
