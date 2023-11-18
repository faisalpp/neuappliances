import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import {getProducts} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import Loader from '../../components/Loader/Loader'
import ProductTable from '../../components/AdminDashboard/ProductTable/ProductTable';
import Pagination2 from '../../components/Pagination/Pagination2'
import SelectInput from '../../components/TextInput/SelectInput'

const ManageProducts = () => {
    
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(6)
    const [productCount,setProductCount] = useState(1)
    const [category,setCategory] = useState('')
    const [search,setSearch] = useState('')
    const [categories,setCategories] = useState([])

    
    const GetCategoriesData = async () => {
      const res = await GetCategories()
      if(res.status === 200){
       setCategories(res.data.categories)
       setCategory(res.data.categories[0].title.toLowerCase().replace(/\s/g,'-'))
      //  GetProducts()
      }
    }

    useEffect(() => {
      GetCategoriesData()
    }, [])
    
    const GetProducts = async () => {
      setLoading(true)
      let res;
      if(search){
        res = await getProducts({page:page,limit:limit,search:search});
      }else{
        res = await getProducts({page:page,limit:limit,category:category});
      }
      console.log(res)
      if(res.status === 200){
       setProducts(res.data.products)
       setProductCount(Math.ceil(res.data.productCount/limit))
       setLoading(false)
      }
  }

    useEffect(() => {
     if(category){
       GetProducts()
     }
    }, [page,category])

    return (
        <> 
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex items-center mb-2 bg-white py-3 px-5 w-full' >
           <div className='flex items-center space-x-2 w-full' >
           <NavLink to="/admin/create-product" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 h-fit' >Create&nbsp;Product</NavLink>
           <SelectInput onChange={(e)=>setCategory(e.target.value)} options={categories} />
           </div>
          <div className='flex w-full justify-end space-x-3' >
           <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search Product' className='text-xs px-2 outline-none border border-b3 rounded-md' />
           <button  type="button" className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
          </div>
         </div>
         {loading ? <div className='flex items-center justify-center w-full' >
                   <img src="/loader-bg.gif" className='w-10 h-10' />
                   </div>
          :products.length > 0 ? <><ProductTable data={products}  getProducts={GetProducts} /><Pagination2 page={page} setPage={setPage} totalPages={productCount} /></>:
          <div className='flex items-center justify-center w-full' >
                   <img src="/not-found.webp" className='w-32 h-32' />
                   </div>
          }
         
         
         </AdminAccount>
        </>
    )
}

export default ManageProducts