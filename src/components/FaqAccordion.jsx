import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'

const FaqAccordion = ({ title, textStyle, answer, parent, child, icon, isExpand }) => {
  const [drp, setDrp] = useState(isExpand ? true : false);
  return (
    <>
      <div onClick={() => { drp ? setDrp(false) : setDrp(true) }} className={`flex flex-col border-[1px] border-gray-200 cursor-pointer ${parent}`} >
        <div className='flex items-center justify-between w-full gap-1' ><h6 className={` ${textStyle}  `} >{title}</h6>
          <div>
            <AiOutlineArrowDown className={`${icon} ${drp ? 'rotate-180' : ''} duration-300`} />
          </div>
        </div>
        <div className={` ${drp ? 'flex' : 'hidden'} ${child} mt-1 `} >
          <p>{answer}</p>
        </div>
      </div>
    </>
  )
}

export default FaqAccordion