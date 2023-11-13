import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import {getProducts} from '../../api/admin'
import Loader from '../../components/Loader/Loader'
import ProductTable from '../../components/AdminDashboard/ProductTable/ProductTable';

const ManageProducts = () => {
    
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

     useEffect(() => {
       GetProducts()
     }, [])
     

    const GetProducts = async () => {
        setLoading(true)
        const res = await getProducts();
        if(res.status === 200){
         setLoading(false)
         setProducts(res.data.products)
        }
    }



    return (
        <>
        {loading ? <Loader/> : 
          <AdminAccount>
         {/* Products Operations */}
         <div className='flex items-center mb-2 bg-white py-3 px-5 w-full' >
           <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2' >Create&nbsp;Product</NavLink>
          <div className='flex w-full justify-end space-x-3' >
           <input placeholder='Search Product' className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <NavLink to="/admin/create-product" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</NavLink>
          </div>
         </div>
         {loading ? <div className='flex items-center justify-center w-full' >
                   <img src="/loader-bg.gif" className='w-10 h-10' />
                   </div>
          :products.length > 0 ? <ProductTable data={products}  getProducts={GetProducts} />:
          <div className='flex items-center justify-center w-full' >
                   <img src="/not-found.webp" className='w-32 h-32' />
                   </div>
          }
         {/* <Pagination2 page={1} totalPages={10} /> */}
         
         </AdminAccount>
          }
        </>
    )
}

export default ManageProducts