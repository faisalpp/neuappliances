
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