import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
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