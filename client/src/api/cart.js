import axios from 'axios'

const isDev = process.env.REACT_APP_DEV === "dev";
const baseUrl = isDev ? process.env.REACT_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
});

export const addToCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/add-to-cart',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/update-cart',data);
    }catch (error){
        return error;
    }
    return response;
}


const refreshUrl = isDev ? `${process.env.REACT_APP_INTERNAL_PATH}/api/user/refresh` : "/api/user/refresh";

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
