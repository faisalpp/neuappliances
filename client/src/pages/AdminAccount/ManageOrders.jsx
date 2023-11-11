import React, { useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import OrderTable from '../../components/AdminDashboard/OrderTable/OrderTable'
import { NavLink } from 'react-router-dom';
import Pagination2 from '../../components/Pagination/Pagination2';
import {getOrders,searchOrder} from '../../api/admin/order'
import { useEffect } from 'react';
import SelectInput from '../../components/TextInput/SelectInput'

const ManageOrders = () => {

    const [orders,setOrders] = useState([])

    // Pagination States
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [totalPages, setTotalPages] = useState(0);
    const [search,setSearch] = useState('')

    const [loading,setLoading] = useState(false)

    const [orderType,setOrderType] = useState('all-orders')

    const GetOrders = async () => {
     setLoading(true)
     const params = { page: page, limit: limit };
     const res = await getOrders(params,{orderType:orderType});
     console.log(res.data)
     if(res.status === 200){
      setLoading(false)
      setOrders(res.data.orders)
      setTotalPages(Math.ceil(res.data.totalCount / limit))
    }else{
     setLoading(false)
     setOrders([])
     }
    }

    useEffect(()=>{
     if(search?.length === 0){
      GetOrders()
     }
    },[orderType,page,search])

    

    const SearchOrder = async (e) => {
     e.preventDefault()
     setLoading(true)
     const res = await searchOrder({orderNo:search})
     if(res.status === 200){
        setLoading(false)
        setOrders(res.data.orders)
        setTotalPages(Math.ceil(res.data.totalCount / limit))
      }else{
       setLoading(false)
       setOrders([])
      }
    }

    return (
        <>
        <AdminAccount>
         <div className='flex space-x-5 items-center mb-2 bg-white py-3 px-5 w-full' >
          <NavLink to="/admin/create-order" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2' >Create&nbsp;Order</NavLink>
          <div className='w-96' ><SelectInput onChange={e=>setOrderType(e.target.value)} options={['All Orders','Delivery','Pickup','Archived']} /></div>
          <form onSubmit={SearchOrder} className='flex w-full justify-end space-x-3' >
           <input name="search" placeholder='Search #12345' value={search} onChange={e=>setSearch(e.target.value)} className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <button className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
          </form>
         </div>
         {loading ? 
         <div className='flex w-full justify-center h-24 items-center' >
         <img src='/loading.gif' className='h-12' />
        </div>: orders.length > 0 ?
         <>
         <OrderTable refreshOrders={GetOrders} orders={orders} />
         <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
         </>:
         <div className='flex w-full justify-center h-52 items-center' >
         <img src='/not-found.webp' className='w-32' />
        </div>
         }
        </AdminAccount>
        </>
    )
}

export default ManageOrders