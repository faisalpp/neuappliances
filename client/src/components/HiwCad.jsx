import React from 'react'
import { Link } from 'react-router-dom'

const HiwCad = ({ icon, title, txt, link }) => {
  return (
    <>
      <div className='h-full px-1 py-2 md:p-2 lg:p-5 xl:p-0'>
        <div className='h-full flex flex-col maxsm:!max-w-[330px] maxmd:max-w-[400px] maxmd:mx-auto min-h-[365px] sm:min-h-[340px] md:min-h-[320px] lg:min-h-[312px] xl:min-h-full gap-5 items-center rounded-[24px_24px_0px_24px] shadow-lg p-5 2xl:p-7 3xl:p-10 bg-white' >
          <img src={icon} className='w-16' alt={title} />
          <h5 className='font-bold text-xl xl:text-2xl text-center' >{title}</h5>
          <div className='text-center'>
            <p className='lg:text-sm md:text-sm xl:text-base font-medium text-center text-black/70' >{txt}</p>
            {
              link ?
                <Link to={link} className="text-b3 font-semibold mt-1">Learn More</Link>
                : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HiwCad