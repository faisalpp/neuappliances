import {AdminApi} from './axiosInstance'

export const createCoupon = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-coupon',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const getCoupons = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-coupons');
    }catch (error){
        return error;
    }
    return response;
}

export const deleteCoupon = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-coupon',data);
    }catch (error){
        return error;
    }
    return response;
}