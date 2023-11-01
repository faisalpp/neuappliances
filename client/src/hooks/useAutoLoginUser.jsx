import { useState, useEffect } from "react";
import { resetUser} from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {refreshUser} from '../store/userSlice'
import Toast from '../utils/Toast'

function useAutoLoginUser() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const autoLoginApiCall = async () => {
    
    const res = await dispatch(refreshUser())
    if(res.payload.auth){
      setLoading(false);
    }else{
      if (res && res.status === 401) {
        dispatch(resetUser());
        Toast('Session Expired!','error',1000)
        navigate('/login')
      } else {
        Toast('Internal Server Error!','error',1000)
      }
      // Set loading to false in case of any error
      setLoading(false);
    }       
    
  };

  useEffect(() => {
    autoLoginApiCall();
  });

  return loading;
}

export default useAutoLoginUser;