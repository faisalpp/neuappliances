
import {AdminApi} from './axiosInstance'

export const getAllZipCords = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/get-all-zip-cords',{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const getSingleZipCords = async (data) => {
    let response;

    try{
        response = await AdminApi.get(`/api/get-single-zip-cords/?id=${data.id}`,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const createZipCords = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/create-zip-cords',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const deleteZipCords = async (data) => {
    let response;

    try{
        response = await AdminApi.get(`/api/admin/delete-zip-cords/?id=${data.id}`,data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const updateZipCords = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-zip-cords',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}