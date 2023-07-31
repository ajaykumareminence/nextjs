import ApiHelper from "@/utils/Api.js"
const getUser = async() => {
    let response = await ApiHelper.getRequest('api/', false);
    return response;
}
export {
    getUser
}