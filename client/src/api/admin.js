import axios from 'axios'

const isDev = process.env.REACT_APP_DEV === "dev";
const baseUrl = isDev ? process.env.REACT_APP_INTERNAL_PATH : "";

const AdminApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});
const AdminMultiApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});


export const Signin = async (data) => {
    let response;
    console.log(data)
    try{
        response = await AdminApi.post('/api/admin/login',data);
    }catch (error){
        return error;
    }
    return response;
}

export const AdminSignout = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/logout');
    }catch (error){
        return error;
    }
    return response;
}


export const GetCategories = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/get-categories');
    }catch (error){
        return error;
    }
    return response;
}

export const createCategory = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/create-category',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateCategory = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-category',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/category-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/create-section',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-section',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSection = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/sections',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getSectionById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/section-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createSectionItem = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/create-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateSectionItem = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItemById = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/section-item-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItems = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/section-items',data);
    }catch (error){
        return error;
    }
    return response;
}

// Proudct Related Rotues
export const createProduct = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/create-product',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getProducts = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-products');
    }catch (error){
        return error;
    }
    return response;
}

// Get Product Types List
export const getProductTypes = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-product-types',data);
    }catch (error){
        return error;
    }
    return response;
}
// Get Product Types List
export const getProductFeatures = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-product-features',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryBrands = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-category-brands',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCategoryColors = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-category-colors',data);
    }catch (error){
        return error;
    }
    return response;
}
export const createFaqTab = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-faq-tab',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getFaqTab = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-faq-tab');
    }catch (error){
        return error;
    }
    return response;
}
export const updateFaqTab = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-faq-tab',data);
    }catch (error){
        return error;
    }
    return response;
}
export const createFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-faq',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getFaqs = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-faqs',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-faq',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-faq',data);
    }catch (error){
        return error;
    }
    return response;
}

export const uploadImage = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/image-upload',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getMedia = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-uploaded-media',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteMedia = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-media',data);
    }catch (error){
        return error;
    }
    return response;
}

// BLOG
export const createBlog = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-blog',data);
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


  const refreshUrl = isDev ? `${process.env.REACT_APP_INTERNAL_PATH}/api/admin/refresh` : "/api/admin/refresh";

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
          await axios.get(refreshUrl, {
            withCredentials: true,
          });
  
          return AdminMultiApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );