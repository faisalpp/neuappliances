import React from 'react'
import { Modal } from './Reusable/Modal'

const Wwsl = ({ img, title, txtStyle }) => {
  return (
    <>
      <div className='relative flex flex-col m-0 items-center rounded-xl justify-center p-5 2xl:p-7 3xl:p-10 bg-white shadow-lg' >
        <img src={img} className='w-16 mb-8' alt={`${img}`} />
        <h3 className={`text-lg xl:text-xl 3xl:text-2xl ${txtStyle} mb-7 font-semibold lg:text-lg text-center`} >{title}</h3>
        {/* <div className='absolute bottom-5 2xl:bottom-7 3xl:bottom-10 flex justify-center items-center'>
          <Modal buttonName="Text" />
        </div> */}
        <button className=' text-b7 font-semibold flex justify-center items-center gap-1'>Lear More <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1.44365 11.779C1.31698 11.779 1.19031 11.7324 1.09031 11.6324C0.896979 11.439 0.896979 11.119 1.09031 10.9257L5.43698 6.57904C5.75698 6.25904 5.75698 5.73904 5.43698 5.41904L1.09031 1.07237C0.896979 0.879037 0.896979 0.559036 1.09031 0.365703C1.28365 0.17237 1.60365 0.17237 1.79698 0.365703L6.14365 4.71237C6.48365 5.05237 6.67698 5.51237 6.67698 5.99904C6.67698 6.4857 6.49031 6.9457 6.14365 7.2857L1.79698 11.6324C1.69698 11.7257 1.57031 11.779 1.44365 11.779Z" fill="#FF9B3E" />
        </svg></button>
      </div>
    </>
  )
}

export default Wwsl