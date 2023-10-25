import { useState, useEffect } from "react";
import { resetAdmin, setAdmin } from "../store/adminSlice";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function useAutoLoginAdmin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const autoLoginApiCall = async () => {
    const isDev = import.meta.env.VITE_APP_DEV === "dev";
    const url = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/admin/refresh` : "/api/admin/refresh";
    await axios.get(url,
        {withCredentials: true,})
        .then((response) => {
         // 1. setUser
         console.log(response)
         const user = {
          _id: response.data.user._id,
          email: response.data.user.email,
          firstName: response.data.user.firstName,
          auth: response.data.auth,
          isAdmin: response.data.user.isAdmin
        };
          dispatch(setAdmin(user));
          setLoading(false);
          // Process the response data here
        })
        .catch((error) => {
          // Check if the error status is unauthorized (401)
          console.log(error)
          if (error.response && error.response.status === 401) {
            // Unauthorized, redirect the user to the login page
            dispatch(resetAdmin());
            navigate('/nu-admin')
          } else {
            // Handle other error scenarios
            console.error(error);
          }
    
          // Set loading to false in case of any error
          setLoading(false);
        });
    
  };

  useEffect(() => {
    autoLoginApiCall();
  });

  return loading;
}

export default useAutoLoginAdmin;