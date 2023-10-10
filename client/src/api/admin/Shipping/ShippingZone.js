import { AdminApi } from '../axiosInstance'

export const createZone = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-shipping-zone',data);
    }catch (error){
        return error;
    }
    return response;
}