import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import LaundryCard from './LaundryCard'

const Filter = () => {

    
    const LaundaryFilter = ({id,title,filters}) => {
     const [is,setIs] = useState('')
     return (
     <div onClick={()=>{is === id ? setIs('') : setIs(id)}} className={`cursor-pointer relative  border-[1px] flex items-center gap-2 text-black font-semibold text-sm px-5 py-4 ${is===id?'rounded-full bg-b3 text-white':'rounded-full bg-white'}`}>
     <div className='flex items-center space-x-2' ><span>{title}</span><FiChevronDown className='text-lg' /></div>    
     {is === id ? 
      <div className='absolute -bottom-36 w-full left-0 overflow-x-hidden overflow-y-scroll bg-white border-[1px] rounded-3xl h-32' >
       <div className='w-full flex flex-col items-center text-white h-32 space-y-2 mt-3' >
        {filters?.length > 0 ? filters.map((filt)=>
        <div className='flex bg-white text-black w-11/12 rounded-md py-1 px-5 justify-center' ><h3>{filt.title}</h3></div>
        ):null}
       </div>
     </div>:null} 
       </div>
     )
    }

    return (
        <div className='flex flex-col gap-10 w-full'>
            <div className='flex gap-8 items-center'>
                <h3 className='whitespace-nowrap'>Filter by </h3>
                <div className='flex items-center flex-wrap gap-2'>
                    <LaundaryFilter id="1" title="Cosmetic Ratings" filters={[{title:'3 Star Rating',link:'/products/?rating=3'},{title:'4 Star Rating',link:'/products/?rating=4'},{title:'5 Star Rating',link:'/products/?rating=5'}]} />            
                    <LaundaryFilter id="2" title="Popular Features" filters={[{title:'3 Star Rating',link:'/products/?rating=3'},{title:'4 Star Rating',link:'/products/?rating=4'},{title:'5 Star Rating',link:'/products/?rating=5'}]} />            
                    <LaundaryFilter id="3" title="Fuel Type" filters={[{title:'3 Star Rating',link:'/products/?rating=3'},{title:'4 Star Rating',link:'/products/?rating=4'},{title:'5 Star Rating',link:'/products/?rating=5'}]} />            
                    <LaundaryFilter id="4" title="Popular Brands" filters={[{title:'3 Star Rating',link:'/products/?rating=3'},{title:'4 Star Rating',link:'/products/?rating=4'},{title:'5 Star Rating',link:'/products/?rating=5'}]} />            
                </div>
            </div>
            <div className='grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 gap-4'>
                <LaundryCard />
                <LaundryCard />
                <LaundryCard />
                <LaundryCard />
            </div>
        </div>
    )
}

export default Filter