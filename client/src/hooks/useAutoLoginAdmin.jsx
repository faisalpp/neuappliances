import { useState, useEffect } from "react";
import { resetAdmin } from "../store/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {RefreshAdmin} from '../store/adminSlice'
import Toast from '../utils/Toast'

function useAutoLoginAdmin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const autoLoginApiCall = async () => {
    const res = await dispatch(RefreshAdmin())
    // console.log(res)
    if(res.payload.auth){
      setLoading(false);
    }else{
      if (res && res.status === 401) {
        dispatch(resetAdmin());
        Toast('Session Expired!','error',1000)
        navigate('/nu-admin')
      } else {
        Toast('Internal Server Error2!','error',1000)
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

export default useAutoLoginAdmin;