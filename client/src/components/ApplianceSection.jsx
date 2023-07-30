import React,{useEffect,useState} from 'react'
import SProductCard from '../components/SProductCard'
import { BsArrowRightShort } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { GetAppliances } from '../api/frontEnd'

const ApplianceSection = () => {

  const [applianceTypes, setApplianceTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getAppliances = async () => {
            const res = await GetAppliances();
            if (res.status === 200) {
                setApplianceTypes(res.data.categories);
                setLoading(false)
            } else {
                console.log(res)
            }
        }
        getAppliances();
    }, [])

  return (
    <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 bg-b8' >
      <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Shop By Appliance Type</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-x-10 2xl:gap-y-14 mt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
        {applianceTypes && applianceTypes.map((item,index)=> <SProductCard key={index} title={item.title} image={item.image} link={`/appliances/refrigerators/${item.slug}`} />)}
      </div>
      <div className='flex justify-center mt-16' ><Link to='/applianceTypes' className='flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold' ><span className='xl:text-[16px] lg:text-sm' >View All Categories</span><BsArrowRightShort className='text-2xl' /></Link></div>
    </div>
  )
}

export default ApplianceSection