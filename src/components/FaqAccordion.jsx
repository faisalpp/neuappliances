import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'

const FaqAccordion = ({ activeBg, activeText, title, textStyle, answer, parent, child, icon, isExpand }) => {
  const [drp, setDrp] = useState(isExpand ? true : false);
  return (
    <>
      <div onClick={() => { drp ? setDrp(false) : setDrp(true) }} className={`duration-200 flex flex-col border-[1px] border-gray-200 cursor-pointer ${parent} ${drp ? activeBg : ''}`} >
        <div className='flex items-center justify-between w-full gap-1' ><h6 className={`${drp ? activeText : ''} ${textStyle}`} >{title}</h6>
          <div>
            <AiOutlineArrowDown className={`${icon} ${drp ? `rotate-180 ${activeText}` : ''} duration-200`} />
          </div>
        </div>
        <div className={` ${drp ? `flex ${activeText}` : 'hidden'} ${child} mt-1 duration-200`} >
          <p>{answer}</p>
        </div>
      </div >
    </>
  )
}

export default FaqAccordion