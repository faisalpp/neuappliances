import React,{useEffect,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import Table from '../../components/AdminDashboard/Table'
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {getSection} from '../../api/admin'

const ManageSections = () => {

    const [sections,setSections] = useState([]);

    useEffect(() => {
        const Sections = async () => {
            const res = await getSection();
            if(res.status === 200){
                setSections(res.data.categorySections);
            }
        }
        Sections()
    }, [])
    
    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex mb-5 bg-b5 py-3 rounded-3xl px-10 shadow-md w-full' >
            <div className='flex items-center border-[1px] rounded-xl border-gray-200' ><AiOutlineSearch className='text-gray-400 ml-3' /><input placeholder='Search Brand' className='text-sm px-2 outline-none' /></div>
            <div className='flex w-full justify-end space-x-3' >
             <NavLink to='/admin/create-section' className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Section</NavLink>
            </div>
         </div>
         {sections.length > 0 ?
         <div className='flex'>
          <Table sections={sections} />
         </div>:<h1 className='text-center' >No Category Sections Found!</h1>}
        </AdminAccount>
        </>
    )
}

export default ManageSections