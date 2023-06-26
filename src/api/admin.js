import axios from 'axios'


const AdminApi = axios.create({
    baseURL: process.env.REACT_APP_INTERNAL_API_PATH_ADMIN,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
});

const AdminRegApi = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH_ADMIN,
  headers: {
      "Content-Type":"application/json",
  },
});


export const Signin = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/login',data);
    }catch (error){
        return error;
    }
    return response;
}

export const AdminSignout = async () => {
    let response;

    try{
        response = await AdminApi.post('/login');
    }catch (error){
        return error;
    }
    return response;
}


export const GetCategories = async () => {
    let response;

    try{
        response = await AdminApi.get('/get-categories');
    }catch (error){
        return error;
    }
    return response;
}

export const createCategory = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/create-category',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/create-section',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSection = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/sections',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createSectionItem = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/create-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItems = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/section-items',data);
    }catch (error){
        return error;
    }
    return response;
}

AdminApi.interceptors.response.use(
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
          await axios.get(`${process.env.REACT_APP_INTERNAL_API_PATH_ADMIN}/refresh`, {
            withCredentials: true,
          });
  
          return AdminApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );