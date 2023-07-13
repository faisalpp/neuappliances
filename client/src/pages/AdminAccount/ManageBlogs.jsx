import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {AiFillPlusCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogTable from '../../components/AdminDashboard/BlogTable';

const ManageBlogs = () => {

    return (
        <>
            <AdminAccount>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className='flex mb-5 py-3 rounded-3xl px-10 w-full' >
              <div className='flex w-full justify-end space-x-3' >
               <NavLink to="/admin/create-blog" ><AiFillPlusCircle className='text-b3 text-3xl shadow-xl rounded-full cursor-pointer' /></NavLink>
              </div>
             </div>
                {/* Products Operations */}
               <div className="flex flex-wrap space-x-5" >
                 <BlogTable/>
               </div> 
               <ToastContainer/>
            </AdminAccount>
        </>
    )
}

export default ManageBlogs