import axios from "axios"
const unauthorizedRequest = axios.create({
    baseURL: 'http://inaboba/api',
    method: "GET"
})
export default unauthorizedRequest