import React,{useEffect,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import Table from '../../components/AdminDashboard/Table'
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink,useNavigate } from 'react-router-dom';
import {getSection} from '../../api/admin'
import {useParams} from 'react-router-dom';
import {useDispatch}  from 'react-redux'
import {resetUser} from '../../store/userSlice'

const ViewSections = () => {
    const { slug } = useParams();
    const [sections,setSections] = useState([]);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const data = {slug};

    useEffect(() => {
        const Sections = async () => {
            const res = await getSection(data);
            
            if(res.status === 200){
                setSections(res.data.categorySections);
            }
            if(res.code === 'ERR_BAD_REQUEST'){
                dispatch(resetUser());
                navigate('/nu-admin')
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
             <NavLink to={`/admin/create-section/${slug}`} className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Section</NavLink>
            </div>
         </div>
         {sections.length > 0 ?
         <div className='flex justify-center'>
          <Table sections={sections}  />
         </div>:<h1 className='text-center' >No Category Sections Found!</h1>}
        </AdminAccount>
        </>
    )
}

export default ViewSections