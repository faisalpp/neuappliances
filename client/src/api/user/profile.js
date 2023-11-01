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

export const GetShippingAddrById = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-shipping-addr-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createShippingAddress = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/create-shipping-address',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateShippingAddress = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/update-shipping-address',data);
    }catch (error){
        return error;
    }
    return response;
}

export const deleteShippingAddress = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/delete-shipping-address',data);
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

export const updateBillingAddress = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/update-billing-address',data);
    }catch (error){
        return error;
    }
    return response;
}

export const changePassword = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-password',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getPrefrences = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-prefrences',data);
    }catch (error){
        return error;
    }
    return response;
}

export const changePrefrences = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-prefrences',data);
    }catch (error){
        return error;
    }
    return response;
}