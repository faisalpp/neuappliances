import axios from 'axios'

let baseURL = process.env.REACT_APP_INTERNAL_API_PATH; // Default production URL

if (process.env.DEV === 'true') {
  baseURL = process.env.REACT_APP_INTERNAL_API_PATH; // Development URL
}

const api = axios.create({
    baseURL:  baseURL,
    headers: {
        "Content-Type":"application/json",
    },
});

export const GetAppliances = async () => {
    let response;

    try{
        response = await api.get('/get-appliances');
    }catch (error){
        return error;
    }
    return response;
}

export const GetApplianceSections = async (data) => {
    let response;

    try{
        response = await api.post('/appliance-sections',data);
    }catch (error){
        return error;
    }
    return response;
}