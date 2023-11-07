
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

export const searchOrder = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/search-order',data);
    }catch (error){
        return error;
    }
    return response;
}

export const searchOrderByTitleOrModel = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/search-order-by-title-model',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateOrderStatus = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-order-status',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateOrderAddresses = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-order-addresses',data);
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

export const archiveOrderById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/archive-order-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}
export const unarchiveOrderById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/unarchive-order-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}
export const createAdminOrder = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-order',data);
    }catch (error){
        return error;
    }
    return response;
}