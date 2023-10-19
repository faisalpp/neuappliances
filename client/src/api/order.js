import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const processOrder = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/process-order',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
