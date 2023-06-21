import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const CustomInput = ({ label, type, placeholder, value }) => {
    return (
        <div className='w-full'>
            <label>
                <span className='text-b16 font-semibold text-xs block mb-2'>{label}</span>
                <input type={type ? type : 'text'} className='border border-[rgba(0,0,0,0.16)] placeholder:text-xs placeholder:text-black/40 rounded-lg h-10 text-xs text-black px-4 w-full outline-none' placeholder={placeholder} value={value} />
            </label>
        </div>
    )
}

export default CustomInput