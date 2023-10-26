import {api}  from './axiosInstance'

export const GetUserProfile = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-profile',data);
    }catch (error){
        return error;
    }
    return response;
}

export const GetShippingAddresses = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-shipping-addresses',data);
    }catch (error){
        return error;
    }
    return response;
}

export const GetBillingAddress = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-billing-address',data);
    }catch (error){
        return error;
    }
    return response;
}