import axios from 'axios'


const AdminApi = axios.create({
    baseURL: process.env.REACT_APP_INTERNAL_API_PATH_ADMIN,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
        // 'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});
const AdminMultiApi = axios.create({
    baseURL: process.env.REACT_APP_INTERNAL_API_PATH_ADMIN,
    withCredentials: true,
    headers: {
        // "Content-Type":"application/json",
        'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});

const AdminRegApi = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH_ADMIN,
  headers: {
      "Content-Type":"application/json",
  },
});


export const Signin = async (data) => {
    let response;
    console.log(data)
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
        response = await AdminApi.get('/logout');
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

export const updateCategory = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/update-category',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/category-by-id',data);
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

export const updateSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/update-section',data);
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
export const getSectionById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/section-by-id',data);
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

export const updateSectionItem = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/update-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItemById = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/section-item-by-id',data);
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

// Proudct Related Rotues
export const createProduct = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/create-product',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getProducts = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/get-products');
    }catch (error){
        return error;
    }
    return response;
}

// Get Product Types List
export const getProductTypes = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/get-product-types',data);
    }catch (error){
        return error;
    }
    return response;
}
// Get Product Types List
export const getProductFeatures = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/get-product-features',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryBrands = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/get-category-brands',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryColors = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/get-category-colors',data);
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

  AdminMultiApi.interceptors.response.use(
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
  
          return AdminMultiApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );