import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import ProductCard2 from './ProductCard2';

const CosmaticSlider = ({stars}) => {

    useEffect(() => {
        let box = document.getElementById('id4');
        setBox(box);
     }, []);
       
       const [Box,setBox] = useState();
       const btnprev = () => {
         let width = Box.clientWidth;
         Box.scrollLeft = Box.scrollLeft - width;
       }
       const btnnext = () => {
         let width = Box.clientWidth;
         Box.scrollLeft = Box.scrollLeft + width;
       }

  return (
    <>
    <div className='relative my-8 xl:mx-32 lg:mx-[4rem]' >
     <button onClick={btnprev} className='absolute top-0 -right-5 z-40 h-full'><div className='lg:flex hidden bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-8  z-40 h-full'><div className='lg:flex hidden bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id4" className='flex lg:overflow-x-hidden overflow-x-scroll space-x-5 scroll-smooth' >
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
        <ProductCard2 stars={stars} />
     </div>
    </div>

    </>
  )
}

export default CosmaticSlider