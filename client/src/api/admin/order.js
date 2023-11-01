
import {AdminApi} from './axiosInstance'

export const getOrders = async (params,data) => {
    let response;
    
    try{
        response = await AdminApi.post(`/api/admin/get-orders/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}

export const getOrderById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-order-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const deleteOrderById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-order-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}