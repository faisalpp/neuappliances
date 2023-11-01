import {api,regApi} from './axiosInstance'

export const Signup = async (data) => {
    let response;

    try{
        response = await regApi.post('/api/register',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signin = async (data) => {
    let response;

    try{
        response = await api.post('/api/login',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const Signout = async () => {
    let response;
  
    try{
        response = await api.get('/api/logout',{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
  }

export const forgotPassword = async (data) => {
    let response;
  
    try{
        response = await regApi.post('/api/user/forgot-password',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
  }

  export const resetPassword = async (data) => {
    let response;
  
    try{
        response = await regApi.post('/api/user/reset-password',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
  }

  export const validatePasswordToken = async (data) => {
    let response;
  
    try{
        response = await regApi.post('/api/user/validate-reset-password-token',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
  }