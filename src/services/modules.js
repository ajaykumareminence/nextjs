import ApiHelper from "@/utils/Api.js"
import axios from "axios";
const getUser = async() => {
    let response = await ApiHelper.getRequest('api/', false);
    return response;
}
const getCountry = async() => {
    return axios.get('https://restcountries.com/v3.1/all').then((res)=>{
        return res.data;
    }).catch((err)=>{
        return err
    })
}
export {
    getUser,
    getCountry
}