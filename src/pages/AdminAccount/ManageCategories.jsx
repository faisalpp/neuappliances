import React,{useEffect,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import BrandCard from '../../components/AdminDashboard/BrandCard'
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {GetCategories} from '../../api/admin'

const ManageCategories = () => {

    const [categories,setCategories] = useState([]);

    useEffect(() => {
        const Categories = async () => {
            const res = await GetCategories();
            if(res.status === 200){
                setCategories(res.data.categories);
            }
        }
        Categories()
    }, [])
    
    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex mb-5 bg-b5 py-3 rounded-3xl px-10 shadow-md w-full' >
            <div className='flex items-center border-[1px] rounded-xl border-gray-200' ><AiOutlineSearch className='text-gray-400 ml-3' /><input placeholder='Search Brand' className='text-sm px-2 outline-none' /></div>
            <div className='flex w-full justify-end space-x-3' >
             <NavLink to='/admin/create-category' className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Category</NavLink>
            </div>
         </div>
         {categories ?
         <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-7 xl:gap-10'>
          {categories.map((category)=><BrandCard key={category.title} updateUrl={`/admin/update-category/${category._id}`} viewUrl={`/admin/view-category-sections/${category.title}/${category._id}`} brandname={category.title} brandimage={`http://localhost:5000/storage/categories/${category.image}`} />)}
         </div>
          :<h1 className='text-center' >No Categories Found</h1>}
        </AdminAccount>
        </>
    )
}

export default ManageCategories