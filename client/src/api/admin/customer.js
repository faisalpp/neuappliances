

import {AdminApi} from './axiosInstance'

export const getAllOrders = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-customers',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}