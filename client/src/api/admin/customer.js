

import {AdminApi} from './axiosInstance'

export const getAllCustomers = async (params,data) => {
    let response;
    
    try{
        response = await AdminApi.post(`/api/admin/get-customers/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}

export const searchCustomerWithEmail = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/search-customer-email',data);
    }catch (error){
        return error;
    }
    return response;
}