import axios from "axios";
const unauthorizedRequest = (params) => axios.create({
    baseURL: 'http://inaboba/api',
    method: "POST",
    withCredentials: true,
    data: params
});
export default unauthorizedRequest;
