import React, { useEffect,useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import Pagination2 from '../../components/Pagination/Pagination2';
import CustomerTable from '../../components/AdminDashboard/CustomerTable/CustomerTable';
import Table from '../../components/AdminDashboard/Table/Table';
import {getAllOrders} from '../../api/admin/customer'
import moment from 'moment'
import {BsPencil} from 'react-icons/bs'
import {BiBlock} from 'react-icons/bi'

const ManageCustomers = () => {    

    const [customers,setCustomers] = useState([])

    const GetAllCustomers = async () => {
        const res = await getAllOrders({userType:'admin'})
        console.log(res)
        if(res.status){
            setCustomers(res.data.customers)
        }
    }

    useEffect(()=>{
        GetAllCustomers()
    },[])


    const Row = ({name,lastOrder,dateRegisterd,email, totalOrders,totalAmount}) => {
        return (
          <tr className="border-b border-l border-r border-b6 text-xs font-medium">
          <td className="px-2 py-3">{name}</td>
          <td className="px-5 py-3">{moment(lastOrder).format('DD MMMM YYYY')}</td>
          <td className="px-10 py-3">{moment(dateRegisterd).format('DD MMMM YYYY')}</td>
          <td className="py-3"><a href={`mailto:${email}`} className='underline text-b6' >{email}</a></td>
          <td className="px-5 py-3">{totalOrders}</td>
          <td className="px-5 py-3 text-b7">${totalAmount}</td>
          <td>
           <div className='flex items-center justify-center space-x-2 h-full' >
            <NavLink title="View Customer" to={`/admin/update-order`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-b3 hover:border-b3 text-xs px-1 w-fit h-fit rounded-full cursor-pointer py-1' ><BsPencil className="text-sm" /></NavLink>
            <NavLink title="Block Customer" to={`/admin/update-order`} className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 border-[1px] border-red-500 hover:border-red-500 text-sm w-fit h-fit rounded-full cursor-pointer px-1 py-1' ><BiBlock className="text-base" /></NavLink>
           </div>
          </td>
        </tr>
        )
      }

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
         <Table head={['Name','Last Order','Date Registerd','Email','Orders','Total Spend','Action']} >
          { customers?.length > 0 ? customers?.map((item)=><Row name={`${item.customer.firstName} ${item.customer.lastName}`} lastOrder={item.lastOrder} dateRegisterd={item.customer.createdAt} email={item.customer.email} totalOrders={item.orderCount} totalAmount={item.totalAmount} /> ) : null}
         </Table>
         <Pagination2 page={1} totalPages={10} />
        </AdminAccount>
        </>
    )
}

export default ManageCustomers