import React, { useState } from 'react';
import MainLayout from './MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import AccountItems from '../components/MyAccount/AccountItems';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../store/userSlice';
import {Signout} from '../api/user/auth'
import Toast from '../utils/Toast'

const MyAccount = ({ children }) => {
    const [isItems, setIsItems] = useState(false);

    const handleCloseItems = () => {
        setIsItems(false);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUserLogout = async (e) => {
        e.preventDefault();
    
        const res = await Signout();
        if (res.status === 200) {
          Toast(res.data.msg,'success',1000)
          dispatch(resetUser());
          navigate('/login');
        } else {
          Toast(res.data.message,'error',1000)
        }
      }

    return (
        <>
            <MainLayout>
                <div className='flex items-center pt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='flex items-center' ><h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-[#5E5E5E]' >My Account</h5></div>
                </div>

                <div className='flex items-center justify-between pt-5 pb-11 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-[40px]'>My Account</h1>

                    {/* 992px Up Screen Logout */}
                    <button type='button' onClick={handleUserLogout} className='hidden lg:flex gap-4 items-center py-4 px-6 rounded-lg font-bold border border-[rgba(0,0,0,0.15)] text-[#B20B0B]'>
                        <span>
                            Logout
                        </span>
                        <FiLogOut stroke-width="3" />
                    </button>
                    {/* End Logout Button */}


                    <button className='ml-auto shadow-md px-3 py-2 text-sm font-semibold rounded-lg flex gap-2 items-center bg-b3 text-white lg:hidden' onClick={() => setIsItems(true)}>
                        My Account <BsChevronDown className='text-xs stroke-1' />
                    </button>
                </div>

                <div className='flex maxlg:flex-col justify-center gap-6 py-10 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

                    <AccountItems onClose={handleCloseItems} isItems={isItems} />

                    <div className='w-full'>
                        <div className='border border-[rgba(0,0,0,0.15)] rounded-2xl p-5 sm:p-7 xl:p-10'>
                            {children}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default MyAccount