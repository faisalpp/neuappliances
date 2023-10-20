import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const addToCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/add-to-cart',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const changeCartItemType = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-cart-item-type',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const getCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-cart',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const updateCartData = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/update-cart',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const removeFromCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-cart-item',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const UpdateTimeSlot = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-time-slot',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const UpdatePickupLocation = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-pickup-location',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const UpdateDeliveryInfo = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-delivery-info',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const UpdateCartFinance = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/change-cart-finance',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
