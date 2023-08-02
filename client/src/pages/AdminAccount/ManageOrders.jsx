import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import OrderTable from '../../components/AdminDashboard/OrderTable/OrderTable'
import { NavLink } from 'react-router-dom';
import Pagination2 from '../../components/Pagination/Pagination2';

const ManageOrders = () => {
    

    return (
        <>
        <AdminAccount>
         <div className='flex items-center mb-2 bg-white py-3 px-5 w-full' >
           <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2' >Create&nbsp;Order</NavLink>
          <div className='flex w-full justify-end space-x-3' >
           <input placeholder='Search #12345' className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <NavLink to="/admin/create-product" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</NavLink>
          </div>
         </div>
         <OrderTable/>
         <Pagination2 page={1} totalPages={10} />
        </AdminAccount>
        </>
    )
}

export default ManageOrders