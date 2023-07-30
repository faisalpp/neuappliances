import axios from 'axios'

const isDev = process.env.REACT_APP_DEV === "dev";
const baseUrl = isDev ? process.env.REACT_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const GetAppliances = async () => {
    let response;

    try{
        response = await api.get('/api/get-appliances');
    }catch (error){
        return error;
    }
    return response;
}

export const GetApplianceSections = async (data) => {
    let response;

    try{
        response = await api.post('/api/appliance-sections',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliancesByFilter = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-by-filter',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliancesBySlug = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-by-slug',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getVideoMediaAll = async (params,data) => {
    let response;

    try{
        response = await api.post(`/api/admin/get-video-media/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}
export const getSingleVideoMedia = async (data) => {
    let response;

    try{
        response = await api.post('/api/admin/get-single-video-media',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getAppliancesFilters = async () => {
    let response;

    try{
        response = await api.get('/api/get-appliances-filters');
    }catch (error){
        return error;
    }
    return response;
}