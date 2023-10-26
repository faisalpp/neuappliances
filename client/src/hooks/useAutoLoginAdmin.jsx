import { useState, useEffect } from "react";
import { resetAdmin, setAdmin } from "../store/adminSlice";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {refreshAdmin} from '../store/adminSlice'
import Toast from '../utils/Toast'

function useAutoLoginAdmin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const autoLoginApiCall = async () => {
    const res = await dispatch(refreshAdmin())
    if(res.payload.status === 200){
      setLoading(false);
    }else{
      if (res && res.status === 401) {
        dispatch(resetUser());
        Toast('Session Expired!','error',1000)
        navigate('/nu-admin')
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

export default useAutoLoginAdmin;