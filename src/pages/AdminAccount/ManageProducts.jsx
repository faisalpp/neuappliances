import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import ProductCard from '../../components/AdminDashboard/ProductCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const ManageProducts = () => {
    

    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex mb-5 bg-b5 py-3 rounded-3xl px-10 shadow-md w-full' >
            <div className='flex items-center border-[1px] rounded-xl border-gray-200' ><AiOutlineSearch className='text-gray-400 ml-3' /><input placeholder='Search Products' className='text-sm px-2 outline-none' /></div>
            <div className='flex w-full justify-end space-x-3' >
             <NavLink to="/admin/manage-products/create" className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Product</NavLink>
            </div>
         </div>
         
         <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
         </div>
        </AdminAccount>
        </>
    )
}

export default ManageProducts