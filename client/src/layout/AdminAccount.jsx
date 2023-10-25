import React, { useState } from 'react';
import MainLayout from './MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import AdminItems from '../components/AdminDashboard/AdminItems';
import { FiLogOut } from 'react-icons/fi';
import { AdminSignout } from '../api/admin/auth';
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { resetAdmin } from '../store/adminSlice'
import { useNavigate } from 'react-router-dom';

const AdminAccount = ({ children }) => {
    const [isItems, setIsItems] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseItems = () => {
        setIsItems(false);
    };

    const handleAdminLogout = async (e) => {
        e.preventDefault();
    
        const res = await AdminSignout();
        if (res.status === 200) {
          toast.success(res.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          dispatch(resetAdmin());
          navigate('/nu-admin');
        } else {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }

    return (
        <>
            <MainLayout>
                <div className='flex items-center pt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='flex items-center' ><h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-[#5E5E5E]' >Dashboard</h5></div>
                </div>

                <div className='flex items-center justify-between pt-5 pb-11 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-[40px]'>Dashboard</h1>

                    {/* 992px Up Screen Logout */}
                    <button type="button" onClick={handleAdminLogout} className='hidden lg:flex gap-4 items-center py-4 px-6 rounded-lg font-bold border border-[rgba(0,0,0,0.15)] text-[#B20B0B]'>
                        <span>
                            Logout
                        </span>
                        <FiLogOut stroke-width="3" />
                    </button>
                    {/* End Logout Button */}


                    <button className='ml-auto shadow-md px-3 py-2 text-sm font-semibold rounded-lg flex gap-2 items-center bg-b3 text-white lg:hidden' onClick={() => setIsItems(true)}>
                        Dashboard <BsChevronDown className='text-xs stroke-1' />
                    </button>
                </div>

                <div className='flex maxlg:flex-col justify-center gap-6 py-10 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

                    <AdminItems onClose={handleCloseItems} isItems={isItems} />

                    <div className='h-full w-full'>
                        <div className='h-auto border border-[rgba(0,0,0,0.15)] rounded-2xl p-5 sm:p-7 xl:py-5 xl:px-10'>
                            {children}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default AdminAccount