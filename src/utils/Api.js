import axios from "axios";
export default class ApiHelper{
    static baseUrl = "https://randomuser.me/";

    static getRequest(endpoint, token=true){
        return axios.get(this.baseUrl+endpoint, this.config(token)).then((res)=>{
            return res.data;
        }).catch((err)=>{
            //error handling here instead of returning err
            return err
        })
    }

    static config(token=true){
        let config = {
            headers: {
                "content-type": "application/json"
            }
        }
        if(token){
            //get token from cookies or localstorage
            config.headers['Authorization'] = `Bearer tokenfromcookies`
        }
        return config;
    }
}