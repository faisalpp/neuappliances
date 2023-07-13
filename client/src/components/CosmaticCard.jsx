import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import ProductCard2 from './ProductCard2';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

const CosmaticCard = ({ customStyle }) => {

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14 w-full 3xl:max-w-1680px 3xl:mx-auto px-4 md:px-10 lg:px-20 2xl:px-120px mt-14 h-auto ` + customStyle} >
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
      </div>
    </>
  )
}

export default CosmaticCard