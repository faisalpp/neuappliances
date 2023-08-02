import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import ProductCard from '../../components/AdminDashboard/ProductCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {getProducts} from '../../api/admin'
import Loader from '../../components/Loader/Loader'
import ProductTable from '../../components/AdminDashboard/ProductTable/ProductTable';
import Pagination2 from '../../components/Pagination/Pagination2';

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
         <div className='flex items-center mb-2 bg-white py-3 px-5 w-full' >
           <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2' >Create&nbsp;Product</NavLink>
          <div className='flex w-full justify-end space-x-3' >
           <input placeholder='Search Product' className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <NavLink to="/admin/create-product" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</NavLink>
          </div>
         </div>
         
         {/* <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10'>
          {products.length > 0 ? products.map((product)=><ProductCard key={product._id} id={product._id} title={product.title} regularPrice={product.regularPrice} salePrice={product.salePrice} stars={product.rating} image={product.images[0]}  />)
          :
          <h2>No Product Found!</h2>
          }
         </div> */}
         <ProductTable data={products} />
         <Pagination2 page={1} totalPages={10} />
        </AdminAccount>
          }
        </>
    )
}

export default ManageProducts