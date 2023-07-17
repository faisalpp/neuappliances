import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const StickyNavbar = ({ state, product }) => {
  return (
    <>
      <div className={`fixed top-0 z-50 ${state ? 'lg:flex' : 'hidden'} flex-col w-full bg-white shadow-lg`} >
        <div className='hidden lg:flex items-center bg-gray-100 py-5 w-full justify-center 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

          <div className='flex space-x-5 items-center w-6/12 max-w-6/12' >
            <div className='border-[1px] border-gray-200 rounded-lg px-2 py-1 w-fit' ><img src={product.images ? `${process.env.REACT_APP_INTERNAL_PATH}/${product.images[0]}` : ''} className='w-12' alt='' /></div>
            <p className='font-bold text-clip maxlg:text-sm' >{product.title}</p>
          </div>

          <div className='flex space-x-5 items-center justify-end w-6/12' >
            <div className='flex flex-col' >
              <h4 className='font-bold text-xl lg:text-2xl text-b3' >${product.salePrice ? product.salePrice : product.regularPrice}</h4>
              {product.salePrice ? <div className='flex space-x-5 items-center' >
                <strike>${product.regularPrice}</strike>
                <span className='flex bg-b4 lg:text-xs text-[10px] text-black px-3 py-2 font-semibold rounded-2xl' >Save $229.00</span>
              </div> : null}
            </div>
            <div className='flex justify-center items-center bg-b7 text-sm text-white px-2 lg:px-10 py-3 cursor-pointer  rounded-lg' ><AiOutlineShoppingCart className='text-lg' /><h6 className="font-bold ml-2" >Add To Cart</h6></div>
          </div>

        </div>

        <div className='grid grid-cols-12 items-center bg-white justify-between w-full 3xl:max-w-1680px py-4 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='col-span-9 flex items-center lg:hidden'>
            <button type='button'>
              <FaBars />
            </button>
          </div>
          <div className='col-span-9 maxlg:fixed maxlg:hidden left-0 bottom-0 top-12 maxlg:w-[230px] maxlg:gap-5 p-4 md:px-10 lg:pl-0 lg:py-0 maxlg:flex-col bg-white flex lg:items-center gap-1 lg:gap-2 xl:gap-4 2xl:gap-5 lg:pr-5 xl:pr-10 [&>a]:font-normal [&>a]:lg-to-xl:text-[11px] [&>a]:text-xs [&>a]:h-5 [&>a]:cursor-pointer [&>a:hover]:border-b-[1px] [&>a:hover]:border-b4' >
            <NavLink to=''>Product Information</NavLink>
            <NavLink to=''>360° View</NavLink>
            <NavLink to=''>Payments Options</NavLink>
            <NavLink to=''>Testimonials</NavLink>
            <NavLink to=''>Product Features</NavLink>
            <NavLink to=''>Inspections</NavLink>
            <NavLink to=''>Compare</NavLink>
            <NavLink to=''>FAQ</NavLink>
          </div>
          <div className='col-span-3 flex items-center justify-end gap-4 lg:gap-3 xl:gap-x-10' >
            <div className='flex items-center gap-1 text-b4 cursor-pointer hover:text-black' ><FiPhone /><span className='text-xs w-max' >(512) 992-2714</span></div>
            <div className='flex items-center gap-1 text-black cursor-pointer hover:text-b4' ><TfiHeadphoneAlt /><span className='text-xs w-max' >Need Help?</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyNavbar