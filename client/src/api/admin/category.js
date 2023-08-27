import {AdminApi,AdminMultiApi} from './axiosInstance'


export const createCategory = async (data) => {
    let response;

    try{
        response = await AdminMultiApi.post('/api/admin/create-category',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}


export const GetCategories = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/get-categories');
    }catch (error){
        return error;
    }
    return response;
}

export const updateCategoriesIndex = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-categories-index',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}