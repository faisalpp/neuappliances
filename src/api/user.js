import axios from 'axios'

const regApi = axios.create({
    baseUrl: process.env.REACT_APP_INTERNAL_API_PATH,
    headers: {
        "Content-Type":"application/json",
    },
});


const api = axios.create({
    baseUrl: process.env.REACT_APP_INTERNAL_API_PATH,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
});


export const Signup = async (data) => {
    let response;

    try{
        response = await regApi.post('/register',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signin = async (data) => {
    let response;

    try{
        response = await api.post('/login',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signout = async () => {
  let response;

  try{
      response = await api.post('/logout');
  }catch (error){
      return error;
  }
  return response;
}


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
          await axios.get(`${process.env.REACT_APP_INTERNAL_API_PATH}/refresh`, {
            withCredentials: true,
          });
  
          return api.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );