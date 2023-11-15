import axios from "axios"
const unauthorizedRequest = axios.create({
    method: "POST"
})
export default unauthorizedRequest