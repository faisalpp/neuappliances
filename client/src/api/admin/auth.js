import {AdminApi,api} from './axiosInstance'


export const Signin = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/login',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const AdminSignout = async () => {
    let response;

    try{
        response = await api.get('/api/admin/logout',{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const ChangePassword = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/change-password',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const refreshAdmin = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/refresh',{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}