import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";


const regApi = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});


const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
});


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
        response = await api.post('/api/login',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetUserProfile = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-profile',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signout = async () => {
  let response;

  try{
      response = await api.get('/api/logout');
  }catch (error){
      return error;
  }
  return response;
}

const refreshUrl = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/user/refresh` : "/api/user/refresh";

api.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalReq = error.config;
  
      if (
        (error.response.status === 401 || error.response.status === 500) &&
        originalReq &&
        !originalReq._isRetry
      ) {
        originalReq._isRetry = true;
  
        try {
          await axios.get(refreshUrl, {
            withCredentials: true,
          });
  
          return api.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );