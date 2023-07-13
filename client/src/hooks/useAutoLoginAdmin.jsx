import { useState, useEffect } from "react";
import { resetUser, setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function useAutoLoginAdmin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const autoLoginApiCall = async () => {
    const isDev = process.env.REACT_APP_DEV === "dev";
    const url = isDev ? `${process.env.REACT_APP_INTERNAL_PATH}/api/admin/refresh` : "/api/admin/refresh";
    await axios.get(url,
        {withCredentials: true,})
        .then((response) => {
         // 1. setUser
         const user = {
          _id: response.data.user._id,
          email: response.data.user.email,
          firstName: response.data.user.firstName,
          auth: response.data.auth,
          isAdmin: response.data.user.isAdmin
        };
          dispatch(setUser(user));
          setLoading(false);
          // Process the response data here
        })
        .catch((error) => {
          // Check if the error status is unauthorized (401)
          if (error.response && error.response.status === 401) {
            // Unauthorized, redirect the user to the login page
            dispatch(resetUser());
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