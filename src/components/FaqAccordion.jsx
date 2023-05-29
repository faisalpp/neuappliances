import React from 'react'
import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const FaqAccordion = ({title,textStyle,answer,parent,child,icon}) => {
  const [drp,setDrp] = useState(false);
  return (
    <>
    <div onClick={()=>{drp ? setDrp(false) : setDrp(true)}} className={`flex flex-col border-[1px] border-gray-200 cursor-pointer ${parent}`} >
     <div className='flex items-center w-full' ><h6 className={` ${textStyle}  `} >{title}</h6><div className='flex w-full justify-end' >{drp ? <RiArrowUpSLine className={`${icon} `} />:<RiArrowDownSLine className={`${icon} `} />}</div></div>
      <div className={` ${drp ? 'flex' : 'hidden'} ${child} mt-1 `} >
       <p>{answer}</p>
      </div>
    </div>
    </>
  )
}

export default FaqAccordion