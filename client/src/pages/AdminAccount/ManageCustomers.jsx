import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import Pagination2 from '../../components/Pagination/Pagination2';
import CustomerTable from '../../components/AdminDashboard/CustomerTable/CustomerTable';

const ManageCustomers = () => {    

    return (
        <>
        <AdminAccount>
         <div className='flex items-center mb-2 bg-white py-3 px-5 w-full' >
          <div className='flex w-full justify-end space-x-3' >
           <input placeholder='Search Customer' className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <NavLink to="/admin/create-product" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</NavLink>
          </div>
         </div>
         <CustomerTable/>
         <Pagination2 page={1} totalPages={10} />
        </AdminAccount>
        </>
    )
}

export default ManageCustomers