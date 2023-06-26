import React,{useEffect,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import BrandCard from '../../components/AdminDashboard/BrandCard'
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { getSectionItems } from '../../api/admin';
import { useParams } from 'react-router-dom';

const ViewSectionItem = () => {
    const { sectionId } = useParams();
    const [sectionItems,setSectionItems] = useState([]);
    const data = {sectionId}
    useEffect(() => {
        const getSectionItem = async () => {
            const res = await getSectionItems(data);
            if(res.status === 200){
                setSectionItems(res.data.sectionItems);
            }
        }
        getSectionItem()
    }, [])
    
    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         {sectionItems.length > 0 ?
         <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-7 xl:gap-10'>
          {sectionItems.map((sectionItem,index)=><BrandCard key={index} brandname={sectionItem.title} brandimage={`http://localhost:5000/storage/sectionItems/${sectionItem.image}`} rating={sectionItem.rating} />)}
         </div>
          :<h1 className='text-center' >No Section Item Found!</h1>}
        </AdminAccount>
        </>
    )
}

export default ViewSectionItem