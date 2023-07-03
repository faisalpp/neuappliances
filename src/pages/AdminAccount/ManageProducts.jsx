import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import ProductCard from '../../components/AdminDashboard/ProductCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {getProducts} from '../../api/admin'
import Loader from '../../components/Loader/Loader'

const ManageProducts = () => {
    
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

     useEffect(() => {
       GetProducts()
     }, [])
     

    const GetProducts = async () => {
        setLoading(true)
        const res = await getProducts();
        console.log(res)
        if(res.status === 200){
         setLoading(false)
         setProducts(res.data.products)
        }else{
            console.log("No Products Found!")
        }
    }



    return (
        <>
        {loading ? <Loader/> : 
          <AdminAccount>
         {/* Products Operations */}
         <div className='flex mb-5 bg-b5 py-3 rounded-3xl px-10 shadow-md w-full' >
            <div className='flex items-center border-[1px] rounded-xl border-gray-200' ><AiOutlineSearch className='text-gray-400 ml-3' /><input placeholder='Search Products' className='text-sm px-2 outline-none' /></div>
            <div className='flex w-full justify-end space-x-3' >
             <NavLink to="/admin/create-product" className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Product</NavLink>
            </div>
         </div>
         
         <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10'>
          {products ? products.map((product)=><ProductCard key={product._id} id={product._id} title={product.title} regularPrice={product.regularPrice} salePrice={product.salePrice} stars={product.rating} image={product.images[0]}  />)
          :
          <h2>No Product Found!</h2>
          }
         </div>
        </AdminAccount>
          }
        </>
    )
}

export default ManageProducts