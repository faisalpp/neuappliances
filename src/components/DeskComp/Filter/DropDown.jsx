import React,{useState} from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Transition } from '@headlessui/react'

const DropDown = ({title,children}) => {
  const [drp,setDrp] = useState(false);
  const [isShowing, setIsShowing] = useState(true)

  return (
    <>
    <div className='flex flex-col w-full h-auto cursor-pointer' >
     {/* Controller */}
     <div className='flex items-center border-b-[1px] border-b-gray-300' onClick={() => setIsShowing((isShowing) => !isShowing)}><h6 className="font-bold w-72 text-sm" >{title}</h6><div className='flex items-center w-full justify-end' >{isShowing ? <RiArrowDropDownLine className='text-2xl' />:<RiArrowDropUpLine className='text-2xl' />}</div></div>
     {/* Body */}
     <div className='flex flex-col h-auto mt-3 cursor-pointer' >
     <Transition show={isShowing}>
       {children}
     </Transition>
     </div>
    
    </div>

    </>
  )
}

export default DropDown