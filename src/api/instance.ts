import axios from "axios"
const instance = axios.create({
    baseURL: 'http://inaboba/api',
    headers:{
        Accept:'application/json'
    },

})
export default instance