import {AdminApi} from './axiosInstance'

export const getRefundRequests = async (params) => {
    let response;
    
    try{
        response = await AdminApi.get(`/api/get-refund-requests/?page=${params?.page}&limit=${params?.limit}`);
    }catch (error){
        return error;
    }
    return response;
}

export const updateRefundRequest = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/update-refund-request',data);
    }catch (error){
        return error;
    }
    return response;
}

export const deleteRefundRequest = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/delete-refund-request',data);
    }catch (error){
        return error;
    }
    return response;
}

export const searchRefundRequest = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/search-refund-request',data);
    }catch (error){
        return error;
    }
    return response;
}