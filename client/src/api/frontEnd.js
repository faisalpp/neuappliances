import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const MultiApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});

export const applyCoupon = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/apply-coupon',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const deleteCoupon = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-coupon',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetZipCords = async (params) => {
    let response;

    try{
        response = await api.get(`/api/get-zip-cords/?zip=${params.zip}`,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const CheckZip = async (data) => {
    let response;

    try{
        response = await api.post('/api/check-zip',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetZipWithSlots = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-zip-with-slots',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetZipMeta = async (data) => {
    let response;

    try{
        response = await api.get('/api/user/get-zip-meta',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliances = async (params) => {
    let response;

    try{
        response = await api.get(`/api/get-appliances/?limit=${params.limit}`);
    }catch (error){
        return error;
    }
    return response;
}
export const getNabarAppliances = async () => {
    let response;

    try{
        response = await api.get('/api/get-navbar-appliances');
    }catch (error){
        return error;
    }
    return response;
}

export const GetApplianceSections = async (data) => {
    let response;

    try{
        response = await api.post('/api/appliance-sections',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliancesBySection = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-by-section',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliancesByFilter = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-by-filter',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetAppliancesBySlug = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-by-slug',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetWasherOrDryer = async (data) => {
    let response;

    try{
        response = await api.post('/api/admin/get-washer-or-dryer',data);
    }catch (error){
        return error;
    }
    return response;
}
export const GetApplianceWithBuyingOptions = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-wiht-buying-options',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const GetApplianceBuyingOptions = async (data) => {
    let response;

    try{
        response = await api.post('/api/get-product-buying-options',data,{validateStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}
export const getSliderAppliances = async (data) => {
    let response;

    try{
        response = await api.post('/api/slider-appliances',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getVideoMediaAll = async (params,data) => {
    let response;

    try{
        response = await api.post(`/api/admin/get-video-media/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}
export const getSingleVideoMedia = async (data) => {
    let response;

    try{
        response = await api.post('/api/admin/get-single-video-media',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getAppliancesFilters = async () => {
    let response;

    try{
        response = await api.get('/api/get-appliances-filters');
    }catch (error){
        return error;
    }
    return response;
}
export const searchAppliance = async (data) => {
    let response;

    try{
        response = await api.post('/api/search-appliance',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getGalleryImages = async (params) => {
    let response;

    try{
     response = await api.get(`/api/admin/get-gallery-image/?page=${params.page}&limit=${params.limit}`)
    }catch (error){
        return error;
    }
    return response;
}

export const GetRecentBlog = async (params) => {
    let response;

    try{
      response = await api.get(`/api/get-recent-blogs/?page=${params.page}&limit=${params.limit}`);
    }catch (error){
        return error;
    }
    return response;
}
export const GetBlogBySlug = async (data) => {
    let response;

    try{
      response = await api.post('/api/get-blog-by-slug',data);
    }catch (error){
        return error;
    }
    return response;
}

export const GetBlogByCateogry = async (data,params) => {
    let response;

    try{
      response = await api.post(`/api/get-blog-by-cateogry/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}

export const getReviews = async (data) => {
    let response;

    try{
      response = await api.post('/api/get-reviews',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}





export const GetGoogleReviews = async () => {
    let response;
    
    try{
      response = await api.get('/api/get-google-reviews');
    }catch (error){
        return error;
    }
    return response;
}
export const getYelpReviews = async () => {
    let response;

    try{
      response = await api.get('/api/get-yelp-reviews');
    }catch (error){
        return error;
    }
    return response;
}


export const GetTeamMember = async () => {
    let response;

    try{
      response = await api.get('/api/get-team-member');
    }catch (error){
        return error;
    }
    return response;
}

export const subscribeNewLetter = async (data) => {
    let response;

    try{
      response = await api.post('/api/newsletter-subscribe',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const submitRefundRequest = async (data) => {
    let response;

    try{
      response = await api.post('/api/refund-request',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const getCustomerShippingAddress = async (data) => {
    let response;

    try{
      response = await api.post('/api/user/customer-shipping-address',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const getCustomerBillingAddress = async (data) => {
    let response;

    try{
      response = await api.post('/api/user/customer-billing-address',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}




export const uploadUserMedia = async (data) => {
    let response;

    try{
      response = await MultiApi.post('/api/user/upload-media',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}

export const deleteUserMedia = async (data) => {
    let response;

    try{
      response = await api.post('/api/user/delete-media',data,{validationStatus:()=>true});
    }catch (error){
        return error;
    }
    return response;
}



