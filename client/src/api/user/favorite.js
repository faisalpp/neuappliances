
import {api}  from './axiosInstance'

export const AddToFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/add-favorite',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const RemoveFromFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-favorite',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetFavorites = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-favorite',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const checkFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/check-favorite',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}