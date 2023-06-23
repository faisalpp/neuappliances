import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import BrandCard from '../../components/AdminDashboard/BrandCard'
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const ManageBrands = () => {
    
    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex mb-5 bg-b5 py-3 rounded-3xl px-10 shadow-md w-full' >
            <div className='flex items-center border-[1px] rounded-xl border-gray-200' ><AiOutlineSearch className='text-gray-400 ml-3' /><input placeholder='Search Brand' className='text-sm px-2 outline-none' /></div>
            <div className='flex w-full justify-end space-x-3' >
             <NavLink to='/admin/manage-brands/create' className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Brand</NavLink>
            </div>
         </div>
         
         <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-7 xl:gap-10'>
          <BrandCard brandname="General Electronics" brandimage="/generalelectronics.png" />
          <BrandCard brandname="LG Electronics" brandimage="/samsungelectronics.png" />
          <BrandCard brandname="Samsung Electronics" brandimage="/lgelectronics.png" />
          <BrandCard brandname="FRIGIDAIRE" brandimage="/frigidaire.png" />
          <BrandCard brandname="Whirlpool" brandimage="/whirlpool2.png" />
         </div>
        </AdminAccount>
        </>
    )
}

export default ManageBrands