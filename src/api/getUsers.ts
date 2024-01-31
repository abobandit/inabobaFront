import axios from "axios"

const user = JSON.parse(localStorage.getItem('user') ??"no token")
const token = user.token
export const getRequest = axios.create({
    headers:{
        withCredentials: true,
        "Access-Control-Allow-Origin":'*',
        Authorization: 'Bearer ' + token,   
    }
})