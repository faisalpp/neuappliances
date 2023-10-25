
import {AdminApi} from './axiosInstance'

export const getOrders = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-orders');
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