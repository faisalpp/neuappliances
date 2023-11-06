router.post('/api/user/add-favorite',favoriteController.AddToFavorite);
router.get('/api/user/get-favorite',favoriteController.GetFavorites);
router.post('/api/user/remove-favorite',favoriteController.RemoveFromFavorite);

import {api}  from './axiosInstance'

export const AddToFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/add-favorite',data);
    }catch (error){
        return error;
    }
    return response;
}

export const RemoveFromFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-favorite',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GerFromFavorite = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-favorite',data);
    }catch (error){
        return error;
    }
    return response;
}