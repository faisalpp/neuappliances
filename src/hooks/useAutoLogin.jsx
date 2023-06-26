import { useState, useEffect } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
const axios = require('axios');

function useAutoLogin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();


  const autoLoginApiCall = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/refresh',
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // 1. setUser
        const user = {
          _id: response.data.user._id,
          email: response.data.user.email,
          username: response.data.user.username,
          auth: response.data.auth,
          isAdmin: response.data.user.isAdmin
        };

        dispatch(setUser(user));
      }
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    autoLoginApiCall();
  }, []);

  return loading;
}

export default useAutoLogin;