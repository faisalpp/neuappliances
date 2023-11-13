import {AdminApi} from './axiosInstance'

export const getDashboardData = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/admin/dashboard-data');
    }catch (error){
        return error;
    }
    return response;
}